using Microsoft.AspNetCore.Mvc;
using RalDva.Website.DataProviders.Interfaces;

namespace RalDva.Website.Controllers
{
    public class InfrastructureController: Controller
    {
        private readonly IMainPageModelProvider _mainPageModelProvider;

        public InfrastructureController(IMainPageModelProvider mainPageModelProvider)
        {
            _mainPageModelProvider = mainPageModelProvider;
        }

        [Route("[controller]/GetMainPageModel")]
        [HttpGet]
        public IActionResult GetMainPageModel()
        {
            var model = _mainPageModelProvider.GetMainPageModel();
            return Ok(model);
        }
    }
}
