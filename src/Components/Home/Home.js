import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  const firstTen = posts.slice(0, 10);
  console.log(firstTen);
    return (
        <div>
             {firstTen.map(post => <Post post={post}></Post>)}
        </div>
    );
};

export default Home;