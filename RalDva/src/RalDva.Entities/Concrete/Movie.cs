using RalDva.Entities.Interfaces;
using System;

namespace RalDva.Entities.Concrete
{
    public class Movie : ActivityEntityBase,
        IEntityWithDuration, IEntityWithWaInformation
    {
        public TimeSpan Duration { get; set; }

        public Int32 WaId { get; set; }

        public String Cast { get; set; }

        public String Director { get; set; }
    }
}
