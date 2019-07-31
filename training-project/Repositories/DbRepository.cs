using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace training_project.Repositories
{
    public class DbRepository
    {
        private static string ConnectionString(string DBname)
        {
            return ConfigurationManager.ConnectionStrings[DBname].ConnectionString;
        }

        public static void ExecuteStoredProcedure(string storedProcedureName, Action<IDataReader> method)
        {
            ExecuteStoredProcedure(storedProcedureName, method, new SqlParameter[0]);
        }

        public static void ExecuteStoredProcedure(string storedProcedureName, Action<IDataReader> method, params SqlParameter[] parameters)
        {
            using (var con = new SqlConnection(ConnectionString("DB")))
            {
                var cmd = new SqlCommand(storedProcedureName, con);
                cmd.CommandType = CommandType.StoredProcedure;
                foreach (var parameter in parameters)
                {
                    cmd.Parameters.Add(parameter); 
                }
                con.Open();
                method.Invoke(cmd.ExecuteReader());
            }
        }
    }
}

