using System;
using System.Data;
using System.Data.SqlClient;

namespace training_project.Repositories
{
    public interface IDbRepository
    {
        void ExecuteStoredProcedure(string storedProcedureName, Action<IDataReader> method);
        void ExecuteStoredProcedure(string storedProcedureName, Action<IDataReader> method, params SqlParameter[] parameters);
    }
}