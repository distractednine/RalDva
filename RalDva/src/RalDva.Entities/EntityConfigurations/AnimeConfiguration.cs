using Microsoft.EntityFrameworkCore;
using RalDva.Entities.Concrete;

namespace RalDva.Entities.EntityConfigurations
{
    public class AnimeConfiguration
    {
        public static void Configure(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Anime>()
                .ToTable("Animes");

            modelBuilder.Entity<Anime>()
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(Constants.MaxStringLengthInDatabase);

            modelBuilder.Entity<Anime>()
                .Property(x => x.Year)
                .IsRequired();

            modelBuilder.Entity<Anime>()
                .HasIndex(x => x.Name)
                .IsUnique();

            modelBuilder.Entity<Anime>()
                .HasKey(x => x.Id);

            modelBuilder
                .Entity<Anime>()
                .HasMany(x => x.Plans);

            modelBuilder
                .Entity<Anime>()
                .HasMany(x => x.Usages);
        }
    }
}
