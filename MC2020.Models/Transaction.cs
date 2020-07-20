using System;
using System.ComponentModel.DataAnnotations;

namespace MC2020.Models
{
    public class Transaction
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        
        [MaxLength(100)]
        public string Description { get; set; }


        [MaxLength(100)]
        public string Reference{ get; set; }

        public decimal? Amount { get; set; } = 0;
        public bool Cleared { get; set; } = false;
        public TransactionType Type { get; set; } = (TransactionType)1;


    }
}
