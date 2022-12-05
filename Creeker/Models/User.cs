using System;
using System.ComponentModel.DataAnnotations;

namespace Creeker.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public int UserTypeId { get; set; }

        [Required]
        [MaxLength(50)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }

        [MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.ImageUrl)]
        [MaxLength(255)]
        public string ImageLocation { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime CreateDateTime { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public UserType UserType { get; set; }

        public string FullName
        {
            get
            {
                return $"{FirstName} {LastName}";
            }
        }
    }
}
