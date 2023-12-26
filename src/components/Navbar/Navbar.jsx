import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const classNameLink = ({ isActive }) =>
    isActive ? [classes.link, classes.active].join(' ') : classes.link

  return (
    <nav className={classes.nav}>
      <div>
        <NavLink className={classNameLink} to='/'>
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={classNameLink} to='/profile'>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={classNameLink} to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink className={classNameLink} to='/music'>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink className={classNameLink} to='/settings'>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
