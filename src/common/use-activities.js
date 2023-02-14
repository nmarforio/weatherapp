import useLocalStorageState from "use-local-storage-state";
import { useFetch } from "./use-fetch";
import { uid } from "uid";

export function useActivities() {
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
  return {
    filteredActivities,
    isGoodWeather,
    handelAddActivity,
    handleDeleteActivity,
  };
}
