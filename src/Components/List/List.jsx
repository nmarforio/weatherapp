const List = ({ activitiesList }) => {
  return (
    <ul>
      {activitiesList.map((activity) => (
        <li key={activity.id}> {activity.name}</li>
      ))}
    </ul>
  );
};

export default List;
