using System.Collections.Generic;
using training_project.Models;

namespace training_project.Services
{
    public interface ISuggestService
    {
        List<SuggestModel> GetAllSuggests(string keyword);
    }
}
