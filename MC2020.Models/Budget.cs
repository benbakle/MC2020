using System;
using System.ComponentModel.DataAnnotations;

namespace MC2020.Models
{
    public class Budget
    {
        public Guid Id { get; set; }
        
        [MaxLength(100)]
        public string Title { get; set; }
        
        public decimal Percentage { get; set; } = 0;
    }
}
