using Microsoft.AspNetCore.Mvc;

namespace training_project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}