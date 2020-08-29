using Microsoft.AspNetCore.Mvc;
using MC2020.EntityFramework;
using MC2020.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace MC2020.API
{

    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        readonly IDataContext _context;
        public TransactionController(IDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTransactions()
        {
            return Ok(
                _context.Query<Transaction>()
                .Include(t => t.Budget)
                .OrderByDescending(t => t.Date));
        }

        [HttpGet("budget/{budgetId}")]
        public IActionResult GetTransactionsByBudget(Guid budgetId)
        {
            return Ok(
                _context.Query<Transaction>()
                .Where(t => t.Budget.Id == budgetId)
                .Include(t => t.Budget)
                .OrderByDescending(t => t.Date));
        }

        [HttpGet("budget/{budgetId}/total")]
        public IActionResult GetTransactionsTotalsByBudget(Guid budgetId)
        {
            var totals = _context.Query<Transaction>()
                .Where(t => t.Budget.Id == budgetId)
                .Select(t => t.Amount);

            return Ok(totals.Sum());
        }

        [HttpGet("income")]
        public IActionResult GetIncomeTransactions()
        {
            return Ok(
                _context.Query<Transaction>()
                .Where(t => t.Budget == null)
                .Include(t => t.Budget)
                .OrderByDescending(t => t.Date));
        }

        [HttpGet("income/total")]
        public IActionResult GetIncomeTotal()
        {
            var totals = _context.Query<Transaction>()
                .Where(t => t.Budget == null)
                .Select(t => t.Amount);

            return Ok(totals.Sum());
        }

        [HttpPost]
        public IActionResult CreateTransaction([FromBody] Transaction transaction)
        {
            Budget _budget = null;

            if (transaction.Budget != null)
            {
                _budget = _context.Query<Budget>().Where(b => b.Id == transaction.Budget.Id).FirstOrDefault();

            }

            transaction.Budget = _budget;

            _context.Add<Transaction>(transaction);
            _context.Save().GetAwaiter().GetResult();
            return NoContent();
        }
    }
}