using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using training_project.Models;
using training_project.Services;

namespace training_project.Controllers
{
    [Route("api/hostInfos")]
    public class HostInfoController : Controller
    {
        private IHostInfoService _serviceHostInfo;

        public HostInfoController(IHostInfoService serviceHostInfo)
        {
            _serviceHostInfo = serviceHostInfo;
        }

        [HttpGet]
        public List<HostInfoModel> GetAllHostInfos()
        {
            return _serviceHostInfo.GetAllHostInfos();
        }
    }
}
