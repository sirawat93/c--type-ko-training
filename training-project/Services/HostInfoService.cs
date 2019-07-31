using System;
using System.Collections.Generic;
using System.Data;
using training_project.Models;
using training_project.Repositories;
using training_project.Constants;

namespace training_project.Services
{
    public class HostInfoService : IHostInfoService
    {
        private HostInfoModel mapHostInfo(IDataReader reader)
        {
            return new HostInfoModel(
                Convert.ToInt32(reader["id"]),
                Convert.ToString(reader["type"]),
                Convert.ToString(reader["title"]),
                Convert.ToInt32(reader["spaceUsed"]),
                Convert.ToInt32(reader["spaceTotal"]),
                Convert.ToInt32(reader["revenue"]),
                Convert.ToInt32(reader["bug"]),
                Convert.ToString(reader["text"]),
                Convert.ToBoolean(reader["warning"])
            );
        }

        public List<HostInfoModel> GetAllHostInfos()
        {
            var output = new List<HostInfoModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllHostInfos,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapHostInfo(reader));
                        }
                    }
                }
            );
            return output;
        }
    }
}
