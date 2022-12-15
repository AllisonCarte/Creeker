using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IPostTagRepository
    {
        void AddPostTag(PostTag postTag);
        List<PostTag> GetAllPostTagsByPostId(int id);
    }
}