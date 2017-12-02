using System;
using System.Collections.Generic;
using RalDva.Entities.Base;
using RalDva.Entities.Concrete.UsageRelated;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class Anime : ActivityEntityBase,
        IEntityBase, IActivityEntity, IEntityWithDuration, IEntityWithSeasons, IEntityWithWaInformation
    {
        public Anime()
        {
            Plans = new HashSet<Plan>();
            Usages = new HashSet<UsageActivity>();
        }

        public Guid Id { get; set; }

        public String Type { get; set; }

        public TimeSpan? Duration { get; set; }

        public Int32 SeasonNumber { get; set; }

        public Int32 EpisodeNumber { get; set; }

        public Int32 WaId { get; set; }

        public String Director { get; set; }

        public ICollection<Plan> Plans { get; set; }

        public ICollection<UsageActivity> Usages { get; set; }
    }
}
