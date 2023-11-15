import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' />
        <Post message='It&#8216; s my first post' />
      </div>
    </div>
  )
}
export default Posts
