using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RalDva.Entities;
using RalDva.Entities.Extensions;
using RalDva.Website.Filters;

namespace RalDva.Website.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [ActivityRoutingFilter]
        [Route("{activity}/{actionName}")]
        public IActionResult ActivityInfo()
        {
            return RedirectToAction(nameof(Index));
        }

        [Route("[Controller]/Error")]
        public IActionResult Error()
        {
            return View();
        }
    }
}
