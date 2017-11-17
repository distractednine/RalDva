using System;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class AudioBook : ActivityEntityBase,
        IEntityWithVolumes, IEntityWithPagesNumber, IEntityWithDuration
    {
        public String Type { get; set; }

        public Int32 VolumeNumber { get; set; }

        public Int32 PagesNumber { get; set; }

        public TimeSpan Duration { get; set; }
    }
}
