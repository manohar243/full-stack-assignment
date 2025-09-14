using System.ComponentModel.DataAnnotations;

namespace DairyBillingSystem.Models.DTOs
{
    public class CreateMilkEntryRequest
    {
        [Required]
        public string FarmerName { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public decimal Liters { get; set; }

        [Required]
        public decimal Fat { get; set; }
    }

    public class MilkEntryResponse
    {
        public int Id { get; set; }
        public string FarmerName { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public decimal Liters { get; set; }
        public decimal Fat { get; set; }
        public decimal Amount { get; set; }
    }
}
