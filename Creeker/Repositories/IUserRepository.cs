using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IUserRepository
    {
        void AddUser(User user);
        void DeleteUser(int id);
        List<User> GetAllUsers();
        User GetUser(int id);
        User GetUserByLogin(string email, string password);
        void UpdateUser(User user);
    }
}