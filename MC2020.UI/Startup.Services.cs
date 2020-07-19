using MC2020.EntityFramework;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MC2020.UI
{
    public partial class Startup
    {

        readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        string ConnectionString()
        {
            return _configuration.GetConnectionString("DefaultConnection");
        }

        bool RunEntityMigrationAtStartup()
        {
            return _configuration.GetValue<bool>("RunEntityMigrationAtStartup");
        }

        string OKTAAuthorizationServer()
        {
            return _configuration.GetValue<string>("OKTAAuthorizationServer");
        }

        string OKTAAudience()
        {
            return _configuration.GetValue<string>("OKTAAudience");
        }

        private void EnitityFramework(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDataContext>(options => options
                            .UseSqlServer(ConnectionString()));
        }

        // In production, the React files will be served from this directory
        private static void ReactSpa(IServiceCollection services)
        {
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot/build";
            });
        }

        private static void Mvc(IServiceCollection services)
        {
            services
                .AddMvc(options => { options.EnableEndpointRouting = false; })
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson();
        }

        private void AddAuthentication(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {      
                options.Authority = OKTAAuthorizationServer();
                options.Audience = OKTAAudience();
            });
        }

        private void EntityMigration(ApplicationDataContext db)
        {
            if (RunEntityMigrationAtStartup())
                db.Database.Migrate();
        }
    }
}
