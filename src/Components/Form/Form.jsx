import React from "react";
import './Form.css'

const Form = ({ onAddActivity }) => {
  return (
    <form onSubmit={onAddActivity}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:
        <input id="name" name="name" type="text" />
      </label>
      <label htmlFor="isForGoodWeather">Good weather Activity
        <input id="isForGoodWeather" name="isForGoodWeather" type="checkbox" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
