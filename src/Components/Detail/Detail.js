import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Detail = () => {
    const {postId} = useParams();
    // console.log(postId);
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, {postId});
  
   
    const {title, body} = post;
    const [img, setImg] = useState([]);
   
    return (
        <div>
            <div style={{border: '1px solid black', borderRadius: '9px', }}>
            posttitle:<h1> {title}</h1>
            post body:<h3> {body}</h3>
            </div>
            {comments.map(ct => <Comment comment={ct}></Comment>) }
        </div>
    );
};

export default Detail;