import React from 'react'
import Profile from '../Profile/Profile'
import classes from './Main.module.css'
import { Route, Routes } from 'react-router-dom'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
import DialogsPage from '../DialogsPage/DialogsPage'
import PropTypes from 'prop-types'

const Main = ({ state }) => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route
          path='/profile'
          element={<Profile postsData={state.postsData} />}
        />
        <Route
          path='/dialogs/*'
          element={
            <DialogsPage
              usersData={state.usersData}
              messagesData={state.messagesData}
            />
          }
        />
        <Route path='/' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Main

Main.propTypes = {
  state: PropTypes.object,
}
