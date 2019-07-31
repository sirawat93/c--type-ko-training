namespace training_project.Models
{
    public class OptionModel
    {
        public OptionModel(int id, string option)
        {
            Id = id;
            Opt = option;
        }
        public int Id { get; set; }
        public string Opt { get; set; }
    }
}
