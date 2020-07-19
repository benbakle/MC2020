using MC2020.EntityFramework;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace MC2020.UI
{
    public partial class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {
            RegisterDependencies(services);
            services.AddHttpClient();
            services.AddCors();
            Mvc(services);
            EnitityFramework(services);
            ReactSpa(services);
            AddAuthentication(services);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDataContext db)
        {
            EntityMigration(db);
            Environment(app, env);
            UseCors(app);
            UseAuthentication(app);
            UseMVC(app);
            UseReactSpa(app, env);
        }
    }
}
