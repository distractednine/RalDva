using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using RalDva.Website.DataProviders.Interfaces;

namespace RalDva.Website.Filters
{
    public class ActivityRoutingFilter : ActionFilterAttribute
    {
        /// <summary>
        /// Ensure that the requested activityName and actionName are supported by the system
        /// </summary>
        /// <param name="context"></param>
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var modelProvider = (IMainPageModelProvider) context.HttpContext.RequestServices.GetService(typeof(IMainPageModelProvider));

            var activityName = context.RouteData.Values["activity"];
            var actionName = context.RouteData.Values["actionName"];

            if (!modelProvider.SupportedActivities.Contains(activityName) ||
                !modelProvider.SupportedActions.Contains(actionName))
            {
                context.Result = new RedirectResult("/Home/Error");
            }
        }
    }
}
