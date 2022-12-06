using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Creeker.Models;
using Creeker.Utils;
using System.Security.Cryptography;

namespace Creeker.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAllCategories()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, Name from Category";
                    var reader = cmd.ExecuteReader();

                    List<Category> categories = new List<Category>();

                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        });
                    }
                    reader.Close();
                    return categories;
                }
            }
        }

        public Category GetCategory(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = "SELECT Id, Name FROM Category WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    Category category = null; 
                   if (reader.Read())
                    {
                        category = new()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        };
                    }
                    reader.Close();
                    return category;
                }
            }
        }


        public void AddCategory(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      INSERT INTO Category(Name)
                      OUTPUT INSERTED.ID
                      VALUES(@name)";
                    cmd.Parameters.AddWithValue("@name", category.Name);
                    category.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateCategory(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      UPDATE Category
                      SET [Name] = @name
                      WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", category.Id);
                    cmd.Parameters.AddWithValue("@name", category.Name);
                    cmd.ExecuteNonQuery();

                }
            }
        }

        public void DeleteCategory(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Category WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
