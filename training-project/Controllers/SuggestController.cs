using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using training_project.Models;
using training_project.Services;

namespace training_project.Controllers
{
    [Route("api/suggests")]
    public class SuggestController : Controller
    {
        private ISuggestService _serviceSuggest;

        public SuggestController(ISuggestService serviceSuggest)
        {
            _serviceSuggest = serviceSuggest;
        }

        [HttpGet]
        public List<SuggestModel> GetAllSuggests()
        {
            var keyword = HttpContext.Request.Query["keyword"].ToString();
            return _serviceSuggest.GetAllSuggests(keyword);
        }
    }
}
