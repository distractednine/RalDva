using System;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class Anime : ActivityEntityBase, 
        IEntityWithDuration, IEntityWithSeasons, IEntityWithWaInformation
    {
        public String Type { get; set; }

        public TimeSpan Duration { get; set; }

        public Int32 SeasonNumber { get; set; }

        public Int32 EpisodeNumber { get; set; }

        public Int32 WaId { get; set; }

        public String Director { get; set; }
    }
}
