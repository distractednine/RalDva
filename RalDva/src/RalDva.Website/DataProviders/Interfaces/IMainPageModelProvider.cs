using System;
using System.Collections.Generic;
using RalDva.Website.Models.MainPage;

namespace RalDva.Website.DataProviders.Interfaces
{
    public interface IMainPageModelProvider
    {
        ICollection<String> SupportedActivities { get;  }

        ICollection<String> SupportedActions { get; }

        MainPageModel GetMainPageModel();
    }
}
