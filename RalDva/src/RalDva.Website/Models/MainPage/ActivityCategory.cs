using System;

namespace RalDva.Website.Models.MainPage
{
    public class ActivityCategory : UiLinkItem
    {
    }

    public class UiLinkItem
    {
        public String Name { get; set; }

        public String Caption { get; set; }

        public String Url { get; set; }
    }
}
