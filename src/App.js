import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./Components/List/List";
import { useEffect, useState } from 'react'

function App() {
  const [activities, setActivities] = useLocalStorageState("activitie", {
    defaultValue: [],
  });
  const [isGoodWeather, setIsGoodWeather] = useState({})

  const URL = 'https://example-apis.vercel.app/api/weather'

  useEffect(() => {
    try {
      async function getAPI() {
        const response = await fetch(URL)
        const data = await response.json()
        setIsGoodWeather(data)
      }
      getAPI()
    } catch (error) {
      console.log(error)
    }
  }, [])

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

  return (
    <div className="App">
      <List activitiesList={filteredActivities} weather={isGoodWeather} />
      <Form onAddActivity={handelAddActivity} />
    </div>
  );
}

export default App;
