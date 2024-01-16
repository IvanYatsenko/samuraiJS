import React from 'react'
import classes from './Message.module.css'
import PropTypes from 'prop-types'

const Message = ({ text }) => {
  return <div className={classes.message}>{text}</div>
}

export default Message

Message.propTypes = {
  text: PropTypes.string,
}
