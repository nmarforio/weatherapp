import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./Components/List/List";
import { useFetch } from "./common/use-fetch";

function App() {
  const [activities, setActivities] = useLocalStorageState("activitie", {
    defaultValue: [],
  });

  const isGoodWeather = useFetch("https://example-apis.vercel.app/api/weather");

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather.isGoodWeather
  );

  function handelAddActivity(event) {
    event.preventDefault();

    const input = document.getElementById("name");
    const checkBox = document.getElementById("isForGoodWeather").checked;
    setActivities([
      { name: input.value, isForGoodWeather: checkBox, id: uid() },
      ...activities,
    ]);
    event.target.reset();
    input.focus();
  }

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <div className="App">
      <List
        onDeleteActivity={handleDeleteActivity}
        activitiesList={filteredActivities}
        weather={isGoodWeather}
      />
      <Form onAddActivity={handelAddActivity} />
    </div>
  );
}

export default App;
