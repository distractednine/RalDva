using System;
using System.Collections.Generic;

namespace RalDva.Website.Models.MainPage
{
    public class MainPageModel
    {
        public ICollection<ActivityCategory> ActivityCategories { get; set; }

        public IDictionary<String, String> ResourceStrings { get; set; }
    }
}
