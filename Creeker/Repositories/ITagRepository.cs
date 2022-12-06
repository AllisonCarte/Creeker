using Creeker.Models;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public interface ITagRepository
    {
        void AddTag(Tag tag);
        void DeleteTag(int id);
        List<Tag> GetAllTags();
        Tag GetTag(int id);
        void UpdateTag(Tag tag);
    }
}