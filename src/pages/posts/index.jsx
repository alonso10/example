import React, { useState, useEffect } from 'react'
import axios from 'axios';

import PostCards from '../../components/cards/posts'

function Posts(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fecthPosts = async () => {
      const response = await axios('/posts')
      setPosts(response.data)
    }

    fecthPosts()
  }, [])

  return (
    <div>
      <h1 className="title">Posts</h1>
      <PostCards posts={posts} />
    </div>
  );
}

export default Posts;