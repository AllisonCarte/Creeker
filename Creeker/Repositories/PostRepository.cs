using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Creeker.Models;
using Creeker.Utils;

namespace Creeker.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAllApprovedPosts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.Title, p.Content, 
                              p.ImageLocation,
                              p.CreateDateTime, p.PublishDateTime, p.IsApproved,
                              p.CategoryId, p.UserId,
                              c.[Name] AS CategoryName,
                              u.FirstName, u.LastName, u.UserName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName
                              FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN [User] u ON p.UserId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              WHERE IsApproved = 1
";
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        Post post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            PublishDateTime = (System.DateTime)DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            User = new User(),
                            Category = new Category()
                        };
                        post.User.UserName = DbUtils.GetString(reader, "UserName");
                        post.Category.Name = DbUtils.GetString(reader, "CategoryName");
                        posts.Add(post);
                    }

                    reader.Close();

                    return posts;
                }
            }
        }
    }
}
