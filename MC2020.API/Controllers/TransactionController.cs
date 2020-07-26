using Microsoft.AspNetCore.Mvc;
using MC2020.EntityFramework;
using MC2020.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.AspNetCore.Authentication;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Internal;
using System.Runtime.InteropServices.ComTypes;

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


        //[HttpGet("budget/totals")]
        //public IActionResult GetBudgetTotals()
        //{
        //    var budgetIds = _context.Query<Budget>().Select(b => b.Id);

        //    var budgetTotals = new List<BudgetTotalsMessage>();

        //    foreach (Guid id in budgetIds)
        //    {
        //        var _total = _context.Query<Transaction>()
        //           .Where(t => t.Budget.Id == id)
        //           .Select(t => t.Amount).Sum();

        //        var message = new BudgetTotalsMessage { BudgetId = id, Total = _total };
        //        budgetTotals.Add(message);
        //    }

        //    return Ok(budgetTotals);
        //    //foreach (var id in budgetIds)
        //    //{
        //    //    var budgetTotal = _context.Query<Transaction>().Where(t => t.Budget.Id == id).Select(t => t.Amount).Sum();
        //    //    var message = new BudgetTotalsMessage()
        //    //    {
        //    //        BudgetId = id,
        //    //        Total = budgetTotal,
        //    //    };

        //    //    budgetTotals.Add(message);
        //    //}

        //    //return Ok(budgetTotals);
        //}

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

    public class BudgetTotalsMessage
    {
        public Guid BudgetId { get; set; }
        public decimal? Total { get; set; }

    }
}