using System;
using System.Collections.Generic;
using System.Linq;
using RalDva.Website.DataProviders.Interfaces;
using RalDva.Website.Models.MainPage;
using RalDva.Website.Resorces;
using RalDva.Website.Extensions;

namespace RalDva.Website.DataProviders
{
    internal class MainPageModelProvider: IMainPageModelProvider
    {
        public ICollection<String> SupportedActivities => new [] {"anime", "audiobooks", "books", "movies", "ranobe", "tvseries"};

        public ICollection<String> SupportedActions => new [] {"add", "story", "plans", "activity", "analitics"};

        public MainPageModel GetMainPageModel()
        {
            var categories = SupportedActivities.Select(x => new ActivityCategory
            {
                Name = x,
                Caption = ResourceHelper.GetString(x.CapitalizaFirstChar()),
                Url = ""
            }).ToArray();

            var resourceStrings = ResourceHelper.GetResources(typeof(Strings));

            return new MainPageModel
            {
                ActivityCategories = categories,
                ResourceStrings = resourceStrings
            };
        }
    }
}
