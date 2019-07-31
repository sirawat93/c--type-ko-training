namespace training_project.Constants
{
    public static class StoredProcedureNames
    {
        public const string GetAllHotels = "dbo.spHotels_GetAll";
        public const string GetAllHotelsSimilarCountry = "dbo.spHotels_GetAllSimilarCountry";
        public const string GetAllHotelsByCountry = "dbo.spHotels_GetAllByCountry";
        public const string GetHotelById = "dbo.spHotels_GetByID";
        public const string GetHotelDetail = "dbo.spHotels_GetHotelDetail";

        public const string GetAllHostInfos = "dbo.spHostInfos_GetAll";

        public const string GetAllSuggests = "dbo.spSuggests_GetAll";
        public const string GetAllSuggestsSimilarCountry = "dbo.spSuggests_GetAllSimilarCountry";
    }
}
