namespace training_project.Models
{
    public class ImageGalleryModel
    {
        public ImageGalleryModel(int id,string image)
        {
            Id = id;
            Image = image;
        }
        public int Id { get; set; }
        public string Image { get; set; }
    }
}
