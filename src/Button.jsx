import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ valor, alHacerClick }) => {
  return (
    <button className='boton' onClick={alHacerClick}>
      {valor}
    </button>
  )
}

Button.propTypes = {
  valor: PropTypes.string.isRequired,
  alHacerClick: PropTypes.func.isRequired
}

export default Button
