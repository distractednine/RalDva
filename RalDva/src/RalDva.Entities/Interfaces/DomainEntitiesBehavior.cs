using System;

namespace RalDva.Entities.Interfaces
{
    public interface IEntityWithSeasons
    {
        Int32 SeasonNumber { get; set; }

        Int32 EpisodeNumber { get; set; }
    }

    public interface IEntityWithDuration
    {
        TimeSpan Duration { get; set; }
    }

    public interface IEntityWithVolumes
    {
        Int32 VolumeNumber { get; set; }
    }

    public interface IEntityWithWaInformation
    {
        Int32 WaId { get; set; }
    }

    public interface IEntityWithPagesNumber
    {
        Int32 PagesNumber { get; set; }
    }

    public interface IEntityWithCast
    {
        String Cast { get; set; }

        String Director { get; set; }
    }
}
