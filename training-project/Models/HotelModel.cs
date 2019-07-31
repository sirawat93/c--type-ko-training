using System.Collections.Generic;

namespace training_project.Models
{
    public class HotelModel
    {
        public HotelModel(
            int id,
            string name,
            string address,
            string imageMain,
            int rating,
            int reviewScore,
            int reviewTotal,
            int price,
            int discountPercent,
            string exception,
            string urgent,
            string country
        ) {
            Id = id;
            Name = name;
            Address = address;
            ImageMain = imageMain;
            Rating = rating;
            ReviewScore = reviewScore;
            ReviewTotal = reviewTotal;
            Price = price;
            DiscountPercent = discountPercent;
            Exception = exception;
            Urgent = urgent;
            Country = country;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ImageMain { get; set; }
        public List<ImageGalleryModel> ImageGalleries { get; set; }
        public int Rating { get; set; }
        public int ReviewScore { get; set; }
        public int ReviewTotal { get; set; }
        public int Price { get; set; }
        public int DiscountPercent { get; set; }
        public string Exception { get; set; }
        public string Urgent { get; set; }
        public string Country { get; set; }
        public List<OfferModel> Offers { get; set; }
        public List<OptionModel> Options { get; set; }
    }
}
