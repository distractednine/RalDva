using System;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class TvSeries : ActivityEntityBase,
        IEntityWithDuration, IEntityWithSeasons, IEntityWithWaInformation, IEntityWithCast
    {
        public TimeSpan Duration { get; set; }

        public Int32 SeasonNumber { get; set; }

        public Int32 EpisodeNumber { get; set; }

        public Int32 WaId { get; set; }

        public String Cast { get; set; }

        public String Director { get; set; }
    }
}
