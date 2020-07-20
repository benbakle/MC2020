using Microsoft.AspNetCore.Mvc;
using MC2020.EntityFramework;
using MC2020.Models;
using System.Linq;

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
        public IActionResult GetFeatures()
        {
            return Ok(_context.Query<Transaction>().OrderByDescending(t => t.Date));
        }
    }
}