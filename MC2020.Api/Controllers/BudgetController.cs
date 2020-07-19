using Microsoft.AspNetCore.Mvc;
using MC2020.EntityFramework;
using MC2020.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace MC2020.API
{

    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController : ControllerBase
    {
        readonly IDataContext _context;
        public BudgetController(IDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetFeatures()
        {
            return Ok(_context.Query<Budget>());
        }
    }
}