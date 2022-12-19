using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Creeker.Models;
using Creeker.Utils;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

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
                              u.FirstName, u.LastName, u.UserName, u.Id AS UserId, 
                              u.Email, u.CreateDateTime, u.ImageLocation,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName,
                              pt.Id as PostTagId, pt.PostId as PostTagPostId, 
                              pt.TagId as PostTagTagId,
                              t.Id AS TagId, t.[Name] AS TagName
                              FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN [User] u ON p.UserId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN PostTag pt ON pt.PostId = p.Id  
                              LEFT JOIN Tag t on t.Id = pt.TagId
                              WHERE IsApproved = 1
";
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        if (!posts.Any(x => x.Id == DbUtils.GetInt(reader, "Id")))
                            {

                        Post post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            PublishDateTime = (DateTime)DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            User = new User(),
                            Category = new Category(),
                            Tags = new List<Tag>()
                        };
                        post.User.UserName = DbUtils.GetString(reader, "UserName");
                            post.User.Id = DbUtils.GetInt(reader, "UserId");
                        post.Category.Name = DbUtils.GetString(reader, "CategoryName");
                       
                        posts.Add(post);
                        }
                        if (DbUtils.IsNotDbNull(reader, "TagId"))
                        { 
                        posts.FirstOrDefault(x => x.Id == DbUtils.GetInt(reader, "Id")).Tags.Add(new Tag
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                            });
                        }
                    }

                    reader.Close();

                    return posts;
                }
            }
        }

        public Post GetPostById(int id)
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
                              u.Email, u.CreateDateTime, u.ImageLocation,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName,
                              pt.Id as PostTagId, pt.PostId as PostTagPostId, 
                              pt.TagId as PostTagTagId,
                              t.Id AS TagId, t.[Name] AS TagName
                              FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN [User] u ON p.UserId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN PostTag pt ON pt.PostId = p.Id
                              LEFT JOIN Tag t on t.Id = pt.TagId
                              WHERE p.Id = @id";
                             
                              cmd.Parameters.AddWithValue("@id", id);
                              var reader = cmd.ExecuteReader();

                            Post post = null;

                            while (reader.Read())
                    {
                        if (post == null)
                        {
                            post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "Content"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                PublishDateTime = (DateTime)DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                                IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                User = new User()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    UserName = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                    UserType = new UserType()
                                    {
                                        Id = DbUtils.GetInt(reader, "UserTypeId"),
                                        Name = DbUtils.GetString(reader, "UserTypeName")
                                    }

                                    },
                                    Category = new Category()
                                    {
                                        Id = DbUtils.GetInt(reader, "CategoryId"),
                                        Name = DbUtils.GetString(reader, "CategoryName")
                                    },
                                       Tags = new List<Tag>()
                            };
                        }

                        if (DbUtils.IsNotDbNull(reader, "TagId") && !post.Tags.Any(x => x.Id == DbUtils.GetNullableInt(reader, "TagId")))
                        {
                            post.Tags.Add(new Tag
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                            });
                        }

                    }    

                        reader.Close();
                        return post;
                              

                }
            }
        }

        // unapproved starts here -- identical to the list of approved, except the boolean value of isApproved is false
        public List<Post> GetAllUnapprovedPosts()
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
                              u.Email, u.CreateDateTime, u.ImageLocation,
                              u.UserTypeId,  u.Id AS UserId
                              ut.[Name] AS UserTypeName,
                              pt.Id as PostTagId, pt.PostId as PostTagPostId, 
                              pt.TagId as PostTagTagId,
                              t.Id AS TagId, t.[Name] AS TagName
                              FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN [User] u ON p.UserId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN PostTag pt ON pt.PostId = p.Id  
                              LEFT JOIN Tag t on t.Id = pt.TagId
                              WHERE IsApproved = 0
";
                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();

                    while (reader.Read())
                    {
                        if (!posts.Any(x => x.Id == DbUtils.GetInt(reader, "Id")))
                        {

                            Post post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "Content"),
                                ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                PublishDateTime = (DateTime)DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                                IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                User = new User(),
                                Category = new Category(),
                                Tags = new List<Tag>()
                            };
                            post.User.UserName = DbUtils.GetString(reader, "UserName");
                            post.User.Id = DbUtils.GetInt(reader, "UserId");
                            post.Category.Name = DbUtils.GetString(reader, "CategoryName");

                            posts.Add(post);
                        }
                        if (DbUtils.IsNotDbNull(reader, "TagId"))
                        {
                            posts.FirstOrDefault(x => x.Id == DbUtils.GetInt(reader, "Id")).Tags.Add(new Tag
                            {
                                Id = DbUtils.GetInt(reader, "TagId"),
                                Name = DbUtils.GetString(reader, "TagName"),
                            });
                        }
                    }

                    reader.Close();

                    return posts;
                }
            }
        }
        // unapproved ends here

        public void Add(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Post (
                            Title, Content, ImageLocation, CreateDateTime, PublishDateTime,
                            IsApproved, CategoryId, UserId )
                        OUTPUT INSERTED.ID
                        VALUES (
                            @Title, @Content, @ImageLocation, @CreateDateTime, @PublishDateTime,
                            @IsApproved, @CategoryId, @UserId )";
                    cmd.Parameters.AddWithValue("@Title", post.Title);
                    cmd.Parameters.AddWithValue("@Content", post.Content);
                    cmd.Parameters.AddWithValue("@ImageLocation", post.ImageLocation);
                    cmd.Parameters.AddWithValue("@CreateDateTime", DateTime.Now);
                    cmd.Parameters.AddWithValue("@PublishDateTime", DateTime.Now);
                    cmd.Parameters.AddWithValue("@IsApproved", post.IsApproved = false);
                    cmd.Parameters.AddWithValue("@CategoryId", post.CategoryId);
                    cmd.Parameters.AddWithValue("@UserId", post.UserId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void EditPost(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Post
                                    SET
                                          Title = @title,
                                          Content = @content,
                                          ImageLocation = @imageLocation,
                                          CategoryId = @categoryId,
                                          IsApproved = @isApproved
                                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@title", post.Title);
                    cmd.Parameters.AddWithValue("@content", post.Content);
                    cmd.Parameters.AddWithValue("@imageLocation", post.ImageLocation);
                    cmd.Parameters.AddWithValue("@categoryId", post.CategoryId);
                    cmd.Parameters.AddWithValue("@isApproved", post.IsApproved);
                    cmd.Parameters.AddWithValue("@id", post.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }






        public void DeletePost(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Post where Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
