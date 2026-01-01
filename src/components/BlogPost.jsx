import { useState, useEffect } from "react";
import getPost from "../services/getPost";
import getUser from "../services/getUser";

function BlogPost({ id }) {


    const [post, setPost] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        getPost(id).then((post) => {
            setPost(post);
        });
        getUser(post.userId).then((user) => {
            setUser(user);
        });
    }, [id]);


    return (
        <div className="flex flex-wrap w-screen">
            <div className="p-5 md:p-10 w-1/3 bg-gray-400 my-2">
                <h3 className="font-bold text-xl text-center">{post.title}</h3>
                <p>create by {user.name}</p>
                <p>{post.body}</p>
            </div>
        </div>
    );
}
export default BlogPost;