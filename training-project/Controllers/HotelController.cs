using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using training_project.Models;
using training_project.Services;

namespace training_project.Controllers
{
    [Route("api/hotels")]
    public class HotelController : Controller
    {
        private IHotelService _serviceHotel;

        public HotelController(IHotelService serviceHotel)
        {
            _serviceHotel = serviceHotel;
        }

        [HttpGet]
        public List<HotelModel> GetAllHotels()
        {
            var keyword = HttpContext.Request.Query["keyword"].ToString();
            return _serviceHotel.GetAllHotels(keyword);
        }

        [HttpGet("{id}")]
        public HotelModel GetHotelById(int id)
        {
            return _serviceHotel.GetHotelById(id);
        }

        [HttpGet("country/{country}")]
        public List<HotelModel> HotelsGetAllByCountry(string country)
        {
            return _serviceHotel.GetAllHotelsByCountry(country);
        }
    }
}