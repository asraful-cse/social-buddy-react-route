import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';



const PostDetail = () => {
    const { id } = useParams()

    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

   
 useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

 },[])

    return (
        <div className='app'>
            <h3>This Post Details {id}</h3>
            <h4>Post id : {post.id}</h4>
            <p>Post Title: <br />{post.title}</p>
            <p>Body :<small>{post.body}</small></p>
        
            <h5>comments: {comments.length}</h5>
            <h6>{comments.name}</h6>
            <h3>{comments.email}</h3>
{
    // comments.map(comment=> <Comments comment={comment}></Comments>)
}
        </div>
    );
};

export default PostDetail;