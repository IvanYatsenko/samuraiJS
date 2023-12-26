import React from 'react'
import classes from './Message.module.css'
import PropTypes from 'prop-types'

const Message = ({ text }) => {
  return <div className={classes.message}>{text}</div>
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
