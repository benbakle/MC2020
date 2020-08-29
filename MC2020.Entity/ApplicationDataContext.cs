using MC2020.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MC2020.EntityFramework
{
    public class ApplicationDataContext : DbContext, IDataContext
    {
        public DbSet<Budget> Budgets { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            OptimizeProperties(builder);
            builder.Entity<Budget>().HasData(
                new Budget { Id = Guid.NewGuid(), Percentage =(decimal)0.25, Title = "Housing" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Insurance" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Transportation" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Utilities" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Entertainment" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.05, Title = "Clothing" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Food" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Saving" },
                new Budget { Id = Guid.NewGuid(), Percentage = (decimal)0.10, Title = "Miscellanieous" }
                );
        }

        public ApplicationDataContext(DbContextOptions<ApplicationDataContext> options) : base(options)
        {

        }

        IQueryable<T> IDataContext.Query<T>()
        {
            return Set<T>();
        }
        T IDataContext.Add<T>(T item)
        {
            return base.Add(item).Entity;
        }
        T IDataContext.Update<T>(T item)
        {
            return base.Update(item).Entity;
        }
        T IDataContext.Remove<T>(T item)
        {
            return base.Remove(item).Entity;
        }
        public async Task<int> Save()
        {
            ChangeTracker.DetectChanges();
            var result = await base.SaveChangesAsync();
            return result;
        }

        private static void OptimizeProperties(ModelBuilder builder)
        {
            foreach (var property in builder.Model.GetEntityTypes()
                .SelectMany(t => t.GetProperties())
                .Where(p => p.ClrType == typeof(decimal) || p.ClrType == typeof(decimal?)))
            {
                property.SetColumnType("decimal(10,5)");
            };
        }

    }

}
