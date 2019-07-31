namespace training_project.Models
{
    public class SuggestModel
    {
        public SuggestModel(int id, string name, int score)
        {
            Id = id;
            Name = name;
            Score = score;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int Score { get; set; }
    }
}
