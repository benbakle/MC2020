using System;

namespace MC2020.Models
{
    public class Budget
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public decimal Percentage { get; set; } = 0;
    }
}
