import React from 'react'
import './Button.css'

const Button = ({ onDeleteActivity, id }) => {
  return (
    <button onClick={() => onDeleteActivity(id)}>X</button>
  )
}

export default Button
