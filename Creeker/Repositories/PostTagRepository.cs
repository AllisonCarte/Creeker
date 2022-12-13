using Creeker.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public class PostTagRepository : BaseRepository, IPostTagRepository
    {

        public PostTagRepository(IConfiguration config) : base(config) { }

        //Allow users to associate a tag with a post by posting to PostTag bridge table
        public void AddPostTag(PostTag postTag)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    INSERT INTO PostTag(PostId, TagId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@postId, @tagId)";
                    cmd.Parameters.AddWithValue("@postId", postTag.PostId);
                    cmd.Parameters.AddWithValue("@tagId", postTag.TagId);

                    postTag.Id = (int)cmd.ExecuteScalar();
                }

            }
        }

        //We should add a get all by post so we can compare directly in the post tag manager view
        public List<PostTag> GetAllPostTagsByPostId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT pt.Id as PostTagId, pt.PostId,
                        pt.TagId, p.id as PostId FROM PostTag pt
                        LEFT JOIN Post p on pt.PostId = p.Id where p.id = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    List<PostTag> postTags = new List<PostTag>();

                    while (reader.Read())
                    {
                        postTags.Add(new PostTag()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("PostTagId")),
                            PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                            TagId = reader.GetInt32(reader.GetOrdinal("TagId")),


                        });
                    }
                    reader.Close();
                    return postTags;
                }
            }
        }

        public List<PostTag> GetAllPostTagsByPostTagId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT pt.Id as PostTagId, pt.PostId,
                        pt.TagId, p.id as PostId FROM PostTag pt
                        LEFT JOIN Post p on pt.PostId = p.Id where pt.id = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    List<PostTag> postTags = new List<PostTag>();

                    while (reader.Read())
                    {
                        postTags.Add(new PostTag()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("PostTagId")),
                            PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                            TagId = reader.GetInt32(reader.GetOrdinal("TagId")),


                        });
                    }
                    reader.Close();
                    return postTags;
                }
            }
        }

        public void DeletePostTag(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM PostTag where Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
