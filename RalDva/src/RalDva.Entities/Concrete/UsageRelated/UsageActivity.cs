using System;
using System.Collections.Generic;
using RalDva.Entities.Concrete.Enumerations;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete.UsageRelated
{
    public class UsageActivity: IEntityBase
    {
        public Guid Id { get; set; }

        public Guid UserId { get; set; }

        public Guid ActivityId { get; set; }
        
        public ICollection<ActivityUsagePeriod> UsagePeriods { get; set; }

        public UsageStatus UsageStatus { get; set; }

        public Int32? DroppedOnEpisode { get; set; }
    }
}
