using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Storage;
using RalDva.Entities.Concrete;
using RalDva.Entities.Concrete.Enumerations;
using RalDva.Entities.Concrete.UsageRelated;

namespace RalDva.Entities.Extensions
{
    public static class DbContextExtensions
    {
        public static void TestDbMethod(this RalDvaDbContext context)
        {
            context.Database.EnsureCreated();

            var plan1 = new Plan
            {
                Number = 1,
                UserId = Guid.NewGuid()
            };
            var usageActivity1 = new UsageActivity
            {
                UsageStatus = UsageStatus.Active,
                DroppedOnEpisode = 1,
                UsagePeriods = new List<ActivityUsagePeriod> { new ActivityUsagePeriod { Start = DateTimeOffset.Now } }
            };
            var newTvSeries = new TvSeries
            {
                Year = 1092,
                Name = "123",
                Plans = new List<Plan> { plan1 },
                Usages = new List<UsageActivity> { usageActivity1 }
            };

            var plan2 = new Plan
            {
                Number = 1,
                UserId = Guid.NewGuid()
            };
            var usageActivity2 = new UsageActivity
            {
                UsageStatus = UsageStatus.Active,
                DroppedOnEpisode = 1,
                UsagePeriods = new List<ActivityUsagePeriod> { new ActivityUsagePeriod { Start = DateTimeOffset.Now } }
            };
            var newAnime = new Anime
            {
                Year = 1092,
                Name = "123",
                Plans = new List<Plan> { plan2 },
                Usages = new List<UsageActivity> { usageActivity2 }
            };

            context.TvSeries.Add(newTvSeries);
            context.Anime.Add(newAnime);
            context.SaveChanges();
        }
    }
}
