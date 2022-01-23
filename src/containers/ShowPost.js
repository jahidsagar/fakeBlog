import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showPosts } from "../redux/actions/postsActions";

function ShowPost(){
    const { postid } = useParams();
    const post = useSelector((state) => state.singlePosts);
    const dispatch = useDispatch();
    const fetchPost = async (id)=>{
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .catch((err) => {
            console.log(err);
        });
        console.log('si ',response.data);
        dispatch(showPosts(response.data));
    }

    useEffect(()=>{
        fetchPost(postid);
    },[postid]);
    
    console.log('goog ',post);
    console.log('object key',Object.keys(post));
    return (
        <div className="container text-center p-2">
            {Object.keys(post).length === 0?(
                <div>
                    ... loading
                </div>
            ):(
                <>
                    <h3 className="my-1">{post.post.title}</h3>
                    <p className="my-2">{post.post.body}</p>
                </>
            )}
        </div>
    );
}
export default ShowPost;