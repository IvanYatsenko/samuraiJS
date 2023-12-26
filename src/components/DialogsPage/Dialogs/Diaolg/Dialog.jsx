import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialog.module.css'
import PropTypes from 'prop-types'

const Dialog = ({ id, name }) => {
  const classNameDialog = ({ isActive }) =>
    isActive ? [classes.dialog, classes.active].join(' ') : classes.dialog

  const path = '/dialogs/' + id

  return (
    <NavLink className={classNameDialog} to={path}>
      {name}
    </NavLink>
  )
}

Dialog.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Dialog
