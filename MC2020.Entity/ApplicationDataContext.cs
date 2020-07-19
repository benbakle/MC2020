using MC2020.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace MC2020.EntityFramework
{
    public class ApplicationDataContext : DbContext, IDataContext
    {
        public DbSet<Budget> Features { get; set; }

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
    }

}
