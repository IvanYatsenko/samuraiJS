import React from 'react'
import PropTypes from 'prop-types'

const ProfileBackground = ({ imageUrl }) => {
  return (
    <div>
      <img className='backgroundImage' alt='background' src={imageUrl} />
    </div>
  )
}

ProfileBackground.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default ProfileBackground
