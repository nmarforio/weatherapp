import "./App.css";
import Form from "./Components/Form/Form.jsx";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./Components/List/List";
import { useFetch } from "./common/use-fetch";
import { useActivities } from "./common/use-activities";

function App() {
  const {
    isGoodWeather,
    handelAddActivity,
    handleDeleteActivity,
    filteredActivities,
  } = useActivities();
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
