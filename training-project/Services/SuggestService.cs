using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using training_project.Models;
using training_project.Repositories;
using training_project.Constants;

namespace training_project.Services
{
    public class SuggestService : ISuggestService
    {
        private SuggestModel mapSuggest(IDataReader reader)
        {
            return new SuggestModel(
                Convert.ToInt32(reader["id"]),
                Convert.ToString(reader["name"]),
                Convert.ToInt32(reader["score"])
            );
        }

        public List<SuggestModel> GetAllSuggests(string keyword)
        {
            if(keyword == "")
            {
                return GetAllSuggests();
            }
            else
            {
                return GetAllSuggestsSimilarCountry(keyword);
            }
        }

        private List<SuggestModel> GetAllSuggests()
        {
            var output = new List<SuggestModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllSuggests,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapSuggest(reader));
                        }
                    }
                }
            );
            return output;
        }

        private List<SuggestModel> GetAllSuggestsSimilarCountry(string keyword)
        {
            var output = new List<SuggestModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllSuggestsSimilarCountry,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapSuggest(reader));
                        }
                    }
                },
                new SqlParameter("@Country", keyword)
            );
            return output;
        }
    }
}
