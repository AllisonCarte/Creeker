using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface IPostTagRepository
    {
        void AddPostTag(PostTag postTag);
        void DeletePostTag(int id);
        List<PostTag> GetAllPostTagsByPostId(int id);
        List<PostTag> GetAllPostTagsByPostTagId(int id);
    }
}