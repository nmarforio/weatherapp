const List = ({ activitiesList, weather }) => {
  console.log(weather)
  return (
    <>
      <h2>{weather.condition} - {weather.temperature}°C</h2>

      <h2>{weather.isGoodWeather ? "Go outside" : "Stay Home"}</h2>
      <ul>
        {activitiesList.map((activity) => (
          <li key={activity.id}> {activity.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
