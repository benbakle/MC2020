using MC2020.EntityFramework;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace MC2020.UI
{
    public partial class Startup
    {

        public void RegisterDependencies(IServiceCollection services)
        {
            services.AddScoped(typeof(IDataContext), typeof(ApplicationDataContext));
            //We are logging to Server 2019 Event logging currently (per SMC)
            services.AddLogging(configure => configure.AddEventLog());

            //Assessment
            //services.AddTransient<GetAssessmentByIdQuery>();
            //services.AddTransient<GetAddressByIdQuery>();
            //services.AddTransient<GetAssessmentsQuery>();
            //services.AddTransient<CreateAssessmentCommand>();
            //services.AddTransient<EditAssessmentCommand>();
        }
    }
}
