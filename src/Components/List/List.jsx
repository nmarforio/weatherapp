import Button from "../Button/Button"

const List = ({ activitiesList, weather, onDeleteActivity }) => {
  // console.log(weather)
  return (
    <>
      <h2>{weather.condition}  {weather.temperature}°C</h2>

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
