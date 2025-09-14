using DairyBillingSystem.Data;
using DairyBillingSystem.Models;
using DairyBillingSystem.Models.Domain;
using DairyBillingSystem.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DairyBillingSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MilkEntriesController : ControllerBase
    {
        private readonly DairyContext _context;

        public MilkEntriesController(DairyContext context)
        {
            _context = context;
        }

        // POST
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<MilkEntryResponse>> Create(CreateMilkEntryRequest request)
        {
            var entry = new MilkEntry
            {
                FarmerName = request.FarmerName,
                Date = request.Date,
                Liters = request.Liters,
                Fat = request.Fat,
                Amount = request.Liters * request.Fat * 8
            };

            _context.MilkEntries.Add(entry);
            await _context.SaveChangesAsync();

            var response = new MilkEntryResponse
            {
                Id = entry.Id,
                FarmerName = entry.FarmerName,
                Date = entry.Date,
                Liters = entry.Liters,
                Fat = entry.Fat,
                Amount = entry.Amount
            };

            return CreatedAtAction(nameof(GetById), new { id = entry.Id }, response);
        }

        // GET ALL
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<MilkEntryResponse>>> GetAll()
        {
            var entries = await _context.MilkEntries.ToListAsync();

            return entries.Select(e => new MilkEntryResponse
            {
                Id = e.Id,
                FarmerName = e.FarmerName,
                Date = e.Date,
                Liters = e.Liters,
                Fat = e.Fat,
                Amount = e.Amount
            }).ToList();
        }

        // GET BY ID
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<MilkEntryResponse>> GetById(int id)
        {
            var entry = await _context.MilkEntries.FindAsync(id);
            if (entry == null) return NotFound();

            return new MilkEntryResponse
            {
                Id = entry.Id,
                FarmerName = entry.FarmerName,
                Date = entry.Date,
                Liters = entry.Liters,
                Fat = entry.Fat,
                Amount = entry.Amount
            };
        }

        // PUT
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<MilkEntryResponse>> Update(int id, CreateMilkEntryRequest request)
        {
            var entry = await _context.MilkEntries.FindAsync(id);
            if (entry == null) return NotFound();

            entry.FarmerName = request.FarmerName;
            entry.Date = request.Date;
            entry.Liters = request.Liters;
            entry.Fat = request.Fat;
            entry.Amount = request.Liters * request.Fat * 8;

            await _context.SaveChangesAsync();

            return new MilkEntryResponse
            {
                Id = entry.Id,
                FarmerName = entry.FarmerName,
                Date = entry.Date,
                Liters = entry.Liters,
                Fat = entry.Fat,
                Amount = entry.Amount
            };
        }

        // DELETE
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var entry = await _context.MilkEntries.FindAsync(id);
            if (entry == null) return NotFound();

            _context.MilkEntries.Remove(entry);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
