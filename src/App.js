import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./Components/List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activitie", {
    defaultValue: [],
  });

  const isGoodWeather = true;
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handelAddActivity(event) {
    event.preventDefault();

    const input = document.getElementById("name").value;
    const checkBox = document.getElementById("isForGoodWeather").checked;
    setActivities([
      ...activities,
      { name: input, isForGoodWeather: checkBox, id: uid() },
    ]);
  }

  return (
    <div className="App">
      <List activitiesList={filteredActivities} weather={isGoodWeather} />
      <Form onAddActivity={handelAddActivity} />
    </div>
  );
}

export default App;
