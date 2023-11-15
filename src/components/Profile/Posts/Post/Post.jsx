import React from 'react'
import classes from './Post.module.css'
import PropTypes from 'prop-types'

const Post = ({ message }) => {
  return (
    <>
      <div className={classes.item}>
        <div>
          <img
            alt='avatar'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql1L2nDunnwamDIr29dCtgnF9TMIVm9hjgw&usqp=CAU'
          />
        </div>
        <div>{message}</div>
      </div>
    </>
  )
}

Post.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Post
