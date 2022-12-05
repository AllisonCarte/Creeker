using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class QuestionChoice
    {
        public int Id { get; set; }

        [Required]
        public int QuestionId { get; set; }

        [Required]
        public int ChoiceId { get; set; }

        [Required]
        public int UserId { get; set; }
    }
}
