import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardLink, CardTitle, Form, Input, Label, FormGroup, ListGroup, ListGroupItem, Table } from "reactstrap";
import { getAllPostTags } from "../../../modules/PostTagManager";
import { getAllTags } from "../../../modules/TagManager";
import { getPostById } from "../../../modules/PostManager";
import TagAndButton from "./postTag";


export const PostTags = ({ }) => {
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);
    const [postTags, setPostTags] = useState([])

    const { id } = useParams();

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);

    const getTagsForThisPost = () => {
        getAllPostTags(id).then(allPostTags => {
            setPostTags(allPostTags);
        } )
    };

    useEffect(() => {
        getTagsForThisPost();
    }, []);

    const getPostsById = () => {
        getPostById(id).then(post => setPost(post));
    };


    useEffect(() => {
        getPostsById();
    }, []);



    return (
        <div className="m-5">
            <h1>{post.title}</h1>
           
                <CardLink href={`/posts`}>
                    Go back to posts
                </CardLink>
            

            <div className="mx-5 mt-2 mb-5">
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tags
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {tags.map((tag) => (
                        <TagAndButton 
                        tag={tag}
                        id={id}
                        postTags={postTags}
                         />
                    ))}

                </Table>
            </div>
        </div>) }