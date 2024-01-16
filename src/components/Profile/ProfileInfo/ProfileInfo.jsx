import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ imageUrl }) => {
  return (
    <div>
      <img style={{ maxHeight: '150px' }} alt='avatar' src={imageUrl} />
    </div>
  )
}

ProfileInfo.propTypes = {
  imageUrl: PropTypes.string,
}

export default ProfileInfo
