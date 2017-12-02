using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using RalDva.Entities.Concrete;
using RalDva.Entities.Concrete.UsageRelated;
using RalDva.Entities.EntityConfigurations;

namespace RalDva.Entities
{
    public class RalDvaDbContext : DbContext
    {
        public DbSet<Anime> Anime { get; set; }

        public DbSet<AudioBook> AudioBooks { get; set; }

        public DbSet<Book> Books { get; set; }

        public DbSet<Ranobe> Ranobes { get; set; }

        public DbSet<Movie> Movies { get; set; }

        public DbSet<TvSeries> TvSeries { get; set; }

        public DbSet<Plan> Plans { get; set; }

        public DbSet<UsageActivity> UsedActivities { get; set; }

        public DbSet<ActivityUsagePeriod> UsagePeriods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("RalEntities");
            modelBuilder.HasChangeTrackingStrategy(ChangeTrackingStrategy.Snapshot);

            ActivityConfiguration<Anime>.Configure(modelBuilder, "Animes");
            ActivityConfiguration<AudioBook>.Configure(modelBuilder, "AudioBooks");
            ActivityConfiguration<Book>.Configure(modelBuilder, "Books");
            ActivityConfiguration<Movie>.Configure(modelBuilder, "Movies");
            ActivityConfiguration<Ranobe>.Configure(modelBuilder, "Ranobes");
            ActivityConfiguration<TvSeries>.Configure(modelBuilder, "TvSeries");

            modelBuilder
                .Entity<UsageActivity>()
                .HasMany(x => x.UsagePeriods);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connString = config["ConnectionStrings:RalDvaDbContext"];

            optionsBuilder.UseSqlServer(connString);
        }
    }
}