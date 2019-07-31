using System;
using NUnit.Framework;
using training_project.Models;
using training_project.Services;

namespace training_project.DBTest.Services
{
    [TestFixture]
    public class HostInfoServiceTest
    {
        [Test]
        //[TestCase(5443, "abramson", "Canada")]
        [TestCase("space", "User Space", "Get More Space", true)]
        //[TestCase("space", "User Space", true)]
        //[TestCase("space", "User Space", true)]
        //[TestCase("space", "User Space", true)]
        //[TestCase("space", "User Space", true)]
        public void Test1(string type, string title, string text, bool warning)
        {
            var hostInfoService = new HostInfoService();
            var hostInfos = hostInfoService.GetAllHostInfos();

            foreach(HostInfoModel hostInfo in hostInfos)
            {
                if(hostInfo.Type.Trim() == type)
                {
                    Assert.AreEqual(hostInfo.Title, title);
                    Assert.AreEqual(hostInfo.Text, text);
                    Assert.AreEqual(hostInfo.Warning, warning);
                    break;
                }
            }
        }
    }
}
