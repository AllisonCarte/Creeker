﻿using Creeker.Models;
using Creeker.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Creeker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAllCategories());
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CategoryController>
        [HttpPost]
        public IActionResult Post(Category category)
        {
            {
                _categoryRepository.AddCategory(category);
                return CreatedAtAction("Get", new { id = category.Id }, category);
            }

        }
            // PUT api/<CategoryController>/5
            [HttpPut("{id}")]
            public IActionResult Put(int id, Category category)
            {
                if (id != category.Id)
                {
                    return BadRequest();
                }
                _categoryRepository.UpdateCategory(category);
                return NoContent();
            }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepository.DeleteCategory(id);
            return NoContent();
        }
    }
}
