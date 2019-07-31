using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using training_project.Models;

namespace traning_project.UnitTests.Model
{
    [TestFixture]
    class HostInfoModelTest
    {
        [Test]
        [TestCase(1, "title", "spaceUsed", 3, 7, 5, 4, "text", true)]
        public void Test1(int id, string type, string title, int spaceUsed, int spaceTotal, int revenue, int bug, string text, bool warning)
        {
            var hostInfo = new HostInfoModel(id, type, title, spaceUsed, spaceTotal, revenue, bug, text, warning);
            Assert.AreEqual(hostInfo.Id, id);
            Assert.AreEqual(hostInfo.Type, type);
            Assert.AreEqual(hostInfo.Title, title);
            Assert.AreEqual(hostInfo.SpaceUsed, spaceUsed);
            Assert.AreEqual(hostInfo.SpaceTotal, spaceTotal);
            Assert.AreEqual(hostInfo.Revenue, revenue);
            Assert.AreEqual(hostInfo.Bug, bug);
            Assert.AreEqual(hostInfo.Text, text);
            Assert.AreEqual(hostInfo.Warning, warning);
        }
    }
}