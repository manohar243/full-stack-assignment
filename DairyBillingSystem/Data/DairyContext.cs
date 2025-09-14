using DairyBillingSystem.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace DairyBillingSystem.Data
{
    public class DairyContext : DbContext
    {
        public DairyContext(DbContextOptions<DairyContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<MilkEntry> MilkEntries { get; set; }
    }
}
