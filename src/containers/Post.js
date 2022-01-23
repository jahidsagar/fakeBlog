import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post() {
    const get_posts = useSelector((state) => state.allPosts.posts);
    console.log('from post ', get_posts);

    const renderlist = get_posts.map((po) => {
        const { uid, id, title, body } = po;

        return (
            <div className="card my-1" key={id}>
                <div className="card-header">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{body}</p>
                    <Link to={'post/'+id} className="btn btn-primary">Read full text</Link>
                </div>
            </div>
        );
    });
    return (
        <>
            {renderlist}
        </>
    );
}
export default Post;