using System.Collections.Generic;
using training_project.Models;

namespace training_project.Services
{
    public interface IHotelService
    {
        List<HotelModel> GetAllHotels(string keyword);
        List<HotelModel> GetAllHotels();
        List<HotelModel> GetAllHotelsSimilarCountry(string keyword);
        List<HotelModel> GetAllHotelsByCountry(string keyword);
        HotelModel GetHotelById(int id);
    }
}
