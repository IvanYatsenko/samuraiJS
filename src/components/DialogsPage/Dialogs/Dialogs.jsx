import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Diaolg/Dialog'
import PropTypes from 'prop-types'

const Dialogs = ({ usersData }) => {
  return (
    <div className={styles.dialogs}>
      {usersData.map((userData) => (
        <Dialog id={userData.id} name={userData.name} key={userData.id} />
      ))}
    </div>
  )
}

export default Dialogs

Dialogs.propTypes = {
  usersData: PropTypes.array,
}
