namespace training_project.Models
{
    public class OfferModel
    {
        public OfferModel(int id, string offer)
        {
            Id = id;
            Offer = offer;
        }
        public int Id { get; set; }
        public string Offer { get; set; }
    }
}
