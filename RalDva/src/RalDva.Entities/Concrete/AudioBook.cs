using System;
using System.Collections.Generic;
using RalDva.Entities.Base;
using RalDva.Entities.Concrete.UsageRelated;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class AudioBook : ActivityEntityBase,
        IEntityBase, IActivityEntity, IEntityWithVolumes, IEntityWithPagesNumber, IEntityWithDuration
    {
        public AudioBook()
        {
            Plans = new HashSet<Plan>();
            Usages = new HashSet<UsageActivity>();
        }

        public Guid Id { get; set; }

        public String Type { get; set; }

        public Int32 VolumeNumber { get; set; }

        public Int32 PagesNumber { get; set; }

        public TimeSpan? Duration { get; set; }

        public ICollection<Plan> Plans { get; set; }

        public ICollection<UsageActivity> Usages { get; set; }
    }
}
