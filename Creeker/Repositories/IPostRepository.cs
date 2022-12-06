using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllApprovedPosts();
    }
}