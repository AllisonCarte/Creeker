using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        List<Post> GetAllApprovedPosts();
        List<Post> GetAllUnapprovedPosts();
    }
}