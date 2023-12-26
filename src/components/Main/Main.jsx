import React from 'react'
import Profile from '../Profile/Profile'
import classes from './Main.module.css'
import { Route, Routes } from 'react-router-dom'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
import DialogsPage from '../DialogsPage/DialogsPage'

const Main = () => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs/*' element={<DialogsPage />} />
        <Route path='/' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Main
