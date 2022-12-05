using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class UserType
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
    }
}
