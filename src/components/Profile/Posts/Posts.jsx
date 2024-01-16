import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post'
import PropTypes from 'prop-types'
import { addPost } from '../../../redux/state'

const Posts = ({ postsData }) => {
  const postTextElement = React.createRef()

  const addPostHandler = () => {
    addPost(postTextElement.current.value)
    console.log(postTextElement.current.value)
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={postTextElement}></textarea>
        <button onClick={addPostHandler}>Add post</button>
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
Posts.propTypes = {
  postsData: PropTypes.array,
}
