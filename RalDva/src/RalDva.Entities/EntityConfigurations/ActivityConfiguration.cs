using Microsoft.EntityFrameworkCore;
using RalDva.Entities.Base;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.EntityConfigurations
{
    public class ActivityConfiguration<T> where T:
        ActivityEntityBase, IEntityBase, IActivityEntity
    {
        public static void Configure(ModelBuilder modelBuilder, string tableName)
        {
            modelBuilder.Entity<T>()
                .ToTable(tableName);

            modelBuilder.Entity<T>()
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(Constants.MaxStringLengthInDatabase);

            modelBuilder.Entity<T>()
                .Property(x => x.Year)
                .IsRequired();

            modelBuilder.Entity<T>()
                .HasIndex(x => x.Name)
                .IsUnique();

            modelBuilder.Entity<T>()
                .HasKey(x => x.Id);

            modelBuilder
                .Entity<T>()
                .HasMany(x => x.Plans);

            modelBuilder
                .Entity<T>()
                .HasMany(x => x.Usages);
        }
    }
}
