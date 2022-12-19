import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { addPostTag, deletePostTag } from "../../../modules/PostTagManager";

export const TagAndButton = ({ tag, id, postTags }) => {

    const navigate = useNavigate();

  
    const savePostTag = () => {
       
        const newPostTag = {
            postId: id,
            tagId: tag.id
        }
        addPostTag(newPostTag).then((t) => {
            navigate(`/posts`)
        });
    }
    const handleDelete = () => {
        debugger
        deletePostTag().then((e) => {
          navigate(`/posts`)
        })
      }
  
    return (

       
                <tbody>
                    <td>{tag.name}</td>
                    <td>
                        {
                        !postTags.some(x => x.tagId === tag.id)
                        ?
                        <Button style={{backgroundColor: "#587D71", width: "6vw", overflow: "hidden"}} onClick={() => { savePostTag() }}>
                            Add Tag
                        </Button>
                        :
                        <Button style={{backgroundColor: "#587D71", width: "6vw", overflow: "hidden"}} >
                        Added
                    </Button>
                        }
                    </td>
                </tbody>
            // </>
    )
}

export default TagAndButton