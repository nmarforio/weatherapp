import React from 'react'

const Button = ({ onDeleteActivity, id }) => {
  return (
    <button onClick={() => onDeleteActivity(id)}>X</button>
  )
}

export default Button
