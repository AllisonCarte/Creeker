using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }
        
        [DataType(DataType.ImageUrl)]
        public string ImageLocation { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreateDateTime { get; set; }
        
        [DataType(DataType.Date)]
        public DateTime PublishDateTime { get; set; }

        [Required]
        public bool IsApproved { get; set; }

        [Required]
        public bool IsEmergency { get; set; }

        public Category Category { get; set; }

        public User User { get; set; }
        
        public List<Tag> Tags { get; set; }

    }
}
