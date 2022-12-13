import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { addPostTag } from "../../../modules/PostTagManager";

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

  
    return (

       
                <tbody>
                    <td>{tag.name}</td>
                    <td>
                        {
                        !postTags.some(x => x.tagId === tag.id)
                        ?
                        <Button  onClick={() => { savePostTag() }}>
                            Add Tag
                        </Button>
                        :
                        <></>
                        }
                    </td>
                </tbody>
            // </>
    )
}

export default TagAndButton