using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class Question
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        [MaxLength(255)]
        [Display(Name = "Question")]
        public string Query { get; set; }

        public User User { get; set; }
    }
}
