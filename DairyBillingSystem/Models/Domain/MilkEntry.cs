using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DairyBillingSystem.Models.Domain
{
    public class MilkEntry
    {
        public int Id { get; set; }

        [Required]
        public string FarmerName { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Liters { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Fat { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; }
    }
}
