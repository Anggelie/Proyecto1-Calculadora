import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ valor }) => {
  return (
    <div className='display'>
      <p>{valor}</p>
    </div>
  )
}

Display.propTypes = {
  valor: PropTypes.string.isRequired
}

export default Display
