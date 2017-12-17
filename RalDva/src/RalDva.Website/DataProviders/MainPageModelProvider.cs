using System;
using System.Collections.Generic;
using System.Linq;
using RalDva.Website.Resorces;
using RalDva.Website.DataProviders.Interfaces;

namespace RalDva.Website.Models.MainPage
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

            return new MainPageModel
            {
                ActivityCategories = categories
            };
        }
    }
}
