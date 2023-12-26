import React from 'react'
import classes from './Messages.module.css'
import Message from './Message/Message'

const Messages = () => {
  const messagesData = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
    'Message 6',
  ]

  return (
    <div className={classes.messages}>
      {messagesData.map((messageText, index) => (
        <Message key={index} text={messageText} />
      ))}
    </div>
  )
}

export default Messages
