import React from 'react'

const Form = () => {

  function onAddActivity(event) {
    event.preventDefault()
    console.log('is this working')
  }

  return (
    <form onSubmit={onAddActivity}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input id='name' name='name' type="text" />
      <label htmlFor="activityType">Good weather Activity</label>
      <input id='activityType' name='activityType' type="checkbox" />
      <button>Submit</button>
    </form>
  )
}

export default Form
