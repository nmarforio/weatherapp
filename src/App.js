import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useState } from "react";

function App() {
  // const [activities, setActivities] = useLocalStorageState("activitie", {
  //   defaultvalue: [],
  // });
  const [activities, setActivities] = useState([]);

  function handelAddActivity(event) {
    event.preventDefault();

    const input = document.getElementById("name").value;
    const checkBox = document.getElementById("isForGoodWeather").checked;
    setActivities([
      ...activities,
      { name: input, isForGoodWeather: checkBox, id: uid() },
    ]);
  }
  console.log(activities);
  return (
    <div className="App">
      <Form onAddActivity={handelAddActivity} />
    </div>
  );
}

export default App;
