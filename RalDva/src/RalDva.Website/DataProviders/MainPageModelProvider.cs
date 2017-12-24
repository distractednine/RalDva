using System;
using System.Collections.Generic;
using System.Linq;
using RalDva.Website.DataProviders.Interfaces;
using RalDva.Website.Models.MainPage;
using RalDva.Website.Resorces;

namespace RalDva.Website.DataProviders
{
    internal class MainPageModelProvider: IMainPageModelProvider
    {
        public ICollection<String> SupportedActivities => new [] {"Anime", "AudioBook", "Book", "Movie", "Ranobe", "TvSeries"};

        public MainPageModel GetMainPageModel()
        {
            var categories = SupportedActivities.Select(x => new ActivityCategory
            {
                Name = x,
                Caption = ResourceHelper.GetString(x),
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
