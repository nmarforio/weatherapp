const List = ({ activitiesList, weather }) => {
  return (
    <>
      <h2>{weather ? "Go outside" : "Stay Home"}</h2>
      <ul>
        {activitiesList.map((activity) => (
          <li key={activity.id}> {activity.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
