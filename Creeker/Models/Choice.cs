using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class Choice
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        [Display(Name = "Choice")]
        public string Selection { get; set; }

      
    }
}
