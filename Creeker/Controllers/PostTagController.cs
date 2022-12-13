using Creeker.Models;
using Creeker.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Creeker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostTagController : ControllerBase
    {
        
            private readonly IPostTagRepository _postTagRepository;

            public PostTagController(IPostTagRepository postTagRepo)
            {
                _postTagRepository = postTagRepo;
            }

            [HttpGet("{id}")]
            public IActionResult GetAllPostTagsByPostId(int id)
            {
                return Ok(_postTagRepository.GetAllPostTagsByPostId(id));
            }


        [HttpGet("PT/{id}")]
        public IActionResult GetAllPostTagsByPostTagId(int id)
        {
            return Ok(_postTagRepository.GetAllPostTagsByPostTagId(id));
        }

        // POST api/<PostTagController>
        [HttpPost]
        public IActionResult Post(PostTag postTag)
        {
            _postTagRepository.AddPostTag(postTag);
            return CreatedAtAction(nameof(GetAllPostTagsByPostId), new { id = postTag.Id }, postTag);
        }

        //// PUT api/<PostTagController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<PostTagController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postTagRepository.DeletePostTag(id);
            return NoContent();
        }
    }
}
