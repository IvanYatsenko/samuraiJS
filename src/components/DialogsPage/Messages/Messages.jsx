import React from 'react'
import classes from './Messages.module.css'
import Message from './Message/Message'
import PropTypes from 'prop-types'

const Messages = ({ messagesData }) => {
  return (
    <div className={classes.messages}>
      {messagesData.map((messageText, index) => (
        <Message key={index} text={messageText} />
      ))}
    </div>
  )
}

export default Messages

Messages.propTypes = {
  messagesData: PropTypes.array,
}
