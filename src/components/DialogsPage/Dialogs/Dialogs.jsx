import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Diaolg/Dialog'

const Dialogs = () => {
  const usersData = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
  ]

  return (
    <div className={styles.dialogs}>
      {usersData.map((userData) => (
        <Dialog id={userData.id} name={userData.name} key={userData.id} />
      ))}
    </div>
  )
}

export default Dialogs
