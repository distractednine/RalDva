using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RalDva.Entities;
using RalDva.Entities.Extensions;

namespace RalDva.Website.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index()
        {
            var w = new RalDvaDbContext();
            w.TestDbMethod();

            return View();
        }
    }
}
