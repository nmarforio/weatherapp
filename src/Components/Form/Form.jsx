import React from "react";

const Form = ({ onAddActivity }) => {
  return (
    <form onSubmit={onAddActivity}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="isForGoodWeather">Good weather Activity</label>
      <input id="isForGoodWeather" name="isForGoodWeather" type="checkbox" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
