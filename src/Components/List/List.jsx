import Button from "../Button/Button"
import './List.css'

const List = ({ activitiesList, weather, onDeleteActivity }) => {
  // console.log(weather)
  return (
    <>
      <h1>{weather.condition}  {weather.temperature}°C</h1>

      <h2>{weather.isGoodWeather ? "Go outside" : "Stay Home"}</h2>
      <ul>
        {activitiesList.map((activity) => (
          <li key={activity.id}> {activity.name}<Button onDeleteActivity={onDeleteActivity} id={activity.id} /></li>
        ))}
      </ul>
    </>
  );
};

export default List;
