using RalDva.Entities.Interfaces;
using System;
using System.Collections.Generic;
using RalDva.Entities.Base;
using RalDva.Entities.Concrete.UsageRelated;

namespace RalDva.Entities.Concrete
{
    public class Movie : ActivityEntityBase,
        IEntityBase, IActivityEntity, IEntityWithDuration, IEntityWithWaInformation
    {
        public Movie()
        {
            Plans = new HashSet<Plan>();
            Usages = new HashSet<UsageActivity>();
        }

        public Guid Id { get; set; }

        public TimeSpan? Duration { get; set; }

        public Int32 WaId { get; set; }

        public String Cast { get; set; }

        public String Director { get; set; }

        public ICollection<Plan> Plans { get; set; }

        public ICollection<UsageActivity> Usages { get; set; }
    }
}
