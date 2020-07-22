using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MC2020.EntityFramework
{
    public interface IDataContext
    {
        T Add<T>(T item) where T : class;
        T Update<T>(T item) where T : class;
        T Remove<T>(T item) where T : class;
        IQueryable<T> Query<T>() where T : class;
        Task<int> Save();
        EntityEntry<T> Entry<T>(T entity) where T : class;
    }
}