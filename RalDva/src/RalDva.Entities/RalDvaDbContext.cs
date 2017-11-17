using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using RalDva.Entities.Concrete;

namespace RalDva.Entities
{
    public class RalDvaDbContext : DbContext
    {
        public DbSet<Anime> Anime { get; set; }

        public DbSet<Anime> AudioBook { get; set; }

        public DbSet<Anime> Book { get; set; }

        public DbSet<Anime> Movie { get; set; }

        public DbSet<Anime> TvSeries { get; set; }

        public void TestDbMethod()
        {
            Database.EnsureCreated();

            Anime.Add(new Anime());
            SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("RalEntities");
            modelBuilder.HasChangeTrackingStrategy(ChangeTrackingStrategy.Snapshot);
            
            // todo: add entity configs here!
            // add plan and watchedA entities!
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