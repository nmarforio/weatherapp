import React from 'react'

const Form = () => {

  function onAddActivity(event) {
    event.preventDefault()

    // const myFormData = new FormData(event.target);
    // const formDataObj = Object.fromEntries(myFormData.entries());
    // console.log(formDataObj)

    const input = document.getElementById('name').value
    const checkBox = document.getElementById('isForGoodWeather').checked


  }

  return (
    <form onSubmit={onAddActivity}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input id='name' name='name' type="text" />
      <label htmlFor="isForGoodWeather">Good weather Activity</label>
      <input id='isForGoodWeather' name='isForGoodWeather' type="checkbox" />
      <button>Submit</button>
    </form>
  )
}

export default Form
