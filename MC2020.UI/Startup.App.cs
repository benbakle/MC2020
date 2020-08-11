using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace MC2020.UI
{
    public partial class Startup
    {

        private static void UseReactSpa(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "wwwroot";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }

        private static void Environment(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
        }

        private static void UseMVC(IApplicationBuilder app)
        {
            app.UseMvc();
        }

        private static void UseAuthentication(IApplicationBuilder app)
        {
            app.UseAuthentication();
        }

        private static IApplicationBuilder UseCors(IApplicationBuilder app)
        {
            return app.UseCors(builder => builder.WithOrigins("http://localhost:3000/"));
        }

        //static void Swagger(IApplicationBuilder app, string clientId)
        //{
        //    app.UseStaticFiles();
        //    app.UseOpenApi();
        //    app.UseSwaggerUi3(s =>
        //    {
        //        s.Path = "/api/docs";
        //        s.CustomJavaScriptPath = "/js/custom.js";
        //        s.CustomStylesheetPath = "/css/custom.css";
        //        s.WithCredentials = true;
        //        s.OAuth2Client = new NSwag.AspNetCore.OAuth2ClientSettings
        //        {
        //            ClientId = clientId,
        //            UsePkceWithAuthorizationCodeGrant = true,
        //            Realm = "",
        //        };
        //    });
        //}

    }
}
