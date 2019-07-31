namespace training_project.Models
{
    public class HostInfoModel
    {
        public HostInfoModel(
            int id,
            string type,
            string title,
            int spaceUsed,
            int spaceTotal,
            int revenue,
            int bug,
            string text,
            bool warning
        )
        {
            Id = id;
            Type = type;
            Title = title;
            SpaceUsed = spaceUsed;
            SpaceTotal = spaceTotal;
            Revenue = revenue;
            Bug = bug;
            Text = text;
            Warning = warning;
        }

        public int Id { get; set; }
        public string Type { get; set; }
        public string Title { get; set; }
        public int SpaceUsed { get; set; }
        public int SpaceTotal { get; set; }
        public int Revenue { get; set; }
        public int Bug { get; set; }
        public string Text { get; set; }
        public bool Warning { get; set; }
    }
}
