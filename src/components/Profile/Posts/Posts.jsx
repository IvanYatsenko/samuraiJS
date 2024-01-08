import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
  const postsData = [
    { id: 1, text: 'Posts 1', likesCount: 0 },
    { id: 2, text: 'Posts 2', likesCount: 10 },
    { id: 3, text: 'Posts 3', likesCount: 20 },
    { id: 4, text: 'Posts 4', likesCount: 30 },
  ]
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={classes.posts}>
        {postsData.map((postData) => (
          <Post
            message={postData.text}
            key={postData.id}
            likesCount={postData.likesCount}
          />
        ))}
      </div>
    </div>
  )
}
export default Posts
