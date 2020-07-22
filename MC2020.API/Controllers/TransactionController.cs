using Microsoft.AspNetCore.Mvc;
using MC2020.EntityFramework;
using MC2020.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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

        [HttpPost]
        public IActionResult CreateTransaction([FromBody] Transaction transaction)
        {
            _context.Add<Transaction>(transaction);
            _context.Save().GetAwaiter().GetResult();
            return NoContent();
        }
    }
}