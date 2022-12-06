using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface ICategoryRepository
    {
        void AddCategory(Category category);
        List<Category> GetAllCategories();
        void UpdateCategory(Category category);
        void DeleteCategory(int id);
        Category GetCategory(int id);
    }
}