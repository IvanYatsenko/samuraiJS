import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import PropTypes from 'prop-types'

const App = ({ state }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Main state={state} />
    </div>
  )
}

export default App

App.propTypes = {
  state: PropTypes.object,
}
