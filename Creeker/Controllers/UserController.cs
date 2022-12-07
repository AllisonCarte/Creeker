using Creeker.Models;
using Creeker.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Creeker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }
        // GET: api/<UserController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAllUsers());
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepository.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("GetByLogin")]
        public IActionResult GetByEmail(string email, string password)
        {
            var user = _userRepository.GetUserByLogin(email, password);

            if (email == null || user == null || password == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST api/<UserController>
        [HttpPost]
        public IActionResult Post(User user)
        {
            _userRepository.AddUser(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _userRepository.UpdateUser(user);
            return NoContent();
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userRepository.DeleteUser(id);
            return NoContent();
        }
    }
}
