import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likesCount={23} />
        <Post message='It&#8216; s my first post' likesCount={0} />
      </div>
    </div>
  )
}
export default Posts
