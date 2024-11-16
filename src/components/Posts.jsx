import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux';

const Posts = () => {
  const {posts} = useSelector(store=>store.post);
  return (
    <div> 
      {
        [1,2,3,4].map((item,index)=> <Post key={index}/>  )
      }
    </div>
  )
}

export default Posts
