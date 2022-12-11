using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void DeletePost(int id);
        List<Post> GetAllApprovedPosts();
        List<Post> GetAllUnapprovedPosts();
        Post GetPostById(int id);
    }
}