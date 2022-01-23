import Post from "./containers/Post";
import React,{useEffect, useCallback, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import { setPosts } from "./redux/actions/postsActions";

function Posts(){
    const posts = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchPosts = async ()=>{
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .catch((err) => {
            console.log(err);
        });
        dispatch(setPosts(response.data));
    }

    useEffect(()=>{
        fetchPosts();
    },[]);
    console.log('post ',posts);
    return (
        <div className="container">
            <Post />
        </div>
    );
}
export default Posts;