using System;
using System.Collections.Generic;
using training_project.Models;
using training_project.Constants;
using training_project.Repositories;
using System.Data;
using System.Data.SqlClient;

namespace training_project.Services
{
    public class HotelService : IHotelService
    {
        private HotelModel mapHotel(IDataReader reader)
        {
            return new HotelModel(
                Convert.ToInt32(reader["id"]),
                Convert.ToString(reader["name"]),
                Convert.ToString(reader["address"]),
                Convert.ToString(reader["imageMain"]),
                Convert.ToInt32(reader["rating"]),
                Convert.ToInt32(reader["reviewScore"]),
                Convert.ToInt32(reader["reviewTotal"]),
                Convert.ToInt32(reader["price"]),
                Convert.ToInt32(reader["discountPercent"]),
                Convert.ToString(reader["exception"]),
                Convert.ToString(reader["urgent"]),
                Convert.ToString(reader["country"])
            );
        }

        private HotelModel GetHotelDetail(HotelModel hotel)
        {
            var imageGalleries = new List<ImageGalleryModel>();
            var offers = new List<OfferModel>();
            var options = new List<OptionModel>();

            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetHotelDetail,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            imageGalleries.Add(new ImageGalleryModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["image"]))
                            );
                        }
                        hotel.ImageGalleries = imageGalleries;

                        reader.NextResult();
                        while (reader.Read())
                        {
                            offers.Add(new OfferModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["offer"]))
                            );
                        }
                        hotel.Offers = offers;

                        reader.NextResult();
                        while (reader.Read())
                        {
                            options.Add(new OptionModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["opt"]))
                            );
                        }
                        hotel.Options = options;
                    }
                },
                new SqlParameter("@Id", hotel.Id)
            );
            return hotel;
        }

        public List<HotelModel> GetAllHotels(string keyword)
        {
            if (keyword == "")
            {
                return GetAllHotels();
            }
            else
            {
                return GetAllHotelsSimilarCountry(keyword);
            }
        }

        public List<HotelModel> GetAllHotels()
        {
            var output = new List<HotelModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllHotels,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapHotel(reader));
                        }
                    }
                }
            );

            foreach (HotelModel hotel in output)
            {
                GetHotelDetail(hotel);
            }
            return output;
        }

        public List<HotelModel> GetAllHotelsSimilarCountry(string keyword)
        {
            var output = new List<HotelModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllHotelsSimilarCountry,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapHotel(reader));
                        }
                    }
                },
                new SqlParameter("@Country", keyword)
            );

            foreach (HotelModel hotel in output)
            {
                GetHotelDetail(hotel);
            }
            return output;
        }

        public List<HotelModel> GetAllHotelsByCountry(string keyword)
        {
            var output = new List<HotelModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetAllHotelsByCountry,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            output.Add(mapHotel(reader));
                        }
                    }
                },
                new SqlParameter("@Country", keyword)
            );

            foreach (HotelModel hotel in output)
            {
                GetHotelDetail(hotel);
            }
            return output;
        }

        public HotelModel GetHotelById(int id)
        {
            HotelModel hotel = null;
            var imageGalleries = new List<ImageGalleryModel>();
            var offers = new List<OfferModel>();
            var options = new List<OptionModel>();
            DbRepository.ExecuteStoredProcedure(StoredProcedureNames.GetHotelById,
                reader =>
                {
                    if (reader != null)
                    {
                        while (reader.Read())
                        {
                            hotel = mapHotel(reader);
                        }

                        reader.NextResult();
                        while (reader.Read())
                        {
                            imageGalleries.Add(new ImageGalleryModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["image"]))
                            );
                        }
                        hotel.ImageGalleries = imageGalleries;

                        reader.NextResult();
                        while (reader.Read())
                        {
                            offers.Add(new OfferModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["offer"]))
                            );
                        }
                        hotel.Offers = offers;

                        reader.NextResult();
                        while (reader.Read())
                        {
                            options.Add(new OptionModel(
                                Convert.ToInt32(reader["id"]),
                                Convert.ToString(reader["opt"]))
                            );
                        }
                        hotel.Options = options;
                    }
                },
                new SqlParameter("@Id", id)
            );
            return hotel;
        }
    }
}



