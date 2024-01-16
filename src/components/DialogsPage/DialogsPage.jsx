import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'
import PropTypes from 'prop-types'

const DialogsPage = ({ usersData, messagesData }) => {
  return (
    <div className={styles.dialogsPage}>
      <Dialogs usersData={usersData} />
      <Messages messagesData={messagesData} />
    </div>
  )
}

export default DialogsPage

DialogsPage.propTypes = {
  usersData: PropTypes.array,
  messagesData: PropTypes.array,
}
