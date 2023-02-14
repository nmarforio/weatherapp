import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./Components/List/List";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activitie", {
    defaultValue: [],
  });
  const [isGoodWeather, setIsGoodWeather] = useState({});

  const URL = "https://example-apis.vercel.app/api/weather";

  try {
    useEffect(() => {
      getAPI();
      let intervalId = setInterval(getAPI, 5000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    async function getAPI() {
      const response = await fetch(URL);
      const data = await response.json();
      setIsGoodWeather(data);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather.isGoodWeather
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
