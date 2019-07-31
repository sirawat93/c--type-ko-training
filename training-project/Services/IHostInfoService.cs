using System.Collections.Generic;
using training_project.Models;

namespace training_project.Services
{
    public interface IHostInfoService
    {
        List<HostInfoModel> GetAllHostInfos();
    }
}
