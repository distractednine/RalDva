using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RalDva.Website.Controllers
{
    public class TestController: Controller
    {
        [Route("/api/[controller]/GetBadRequest")]
        [HttpGet]
        public IActionResult GetBadRequest()
        {
            return BadRequest("BadRequest from test controller");
        }

        [Route("/api/[controller]/GetInternalServerError")]
        [HttpPost]
        public IActionResult GetInternalServerError()
        {
            var errorObject = new
            {
                message = "InternalServerError from test controller",
                prop1 = "prop1",
                prop2 = 2
            };

            return StatusCode(StatusCodes.Status500InternalServerError, errorObject);
        }
    }
}
