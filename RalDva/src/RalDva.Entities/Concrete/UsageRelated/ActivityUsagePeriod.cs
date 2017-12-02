using System;
using System.ComponentModel.DataAnnotations.Schema;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete.UsageRelated
{
    public class ActivityUsagePeriod : IEntityBase
    {
        public Guid Id { get; set; }

        public Guid UsedActivityId { get; set; }

        [ForeignKey("UsedActivityId")]
        public UsageActivity UsageActivity { get; set; }

        public DateTimeOffset? Start { get; set; }

        public DateTimeOffset? End { get; set; }
    }
}
