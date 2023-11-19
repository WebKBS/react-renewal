import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const { data: loadedMeals, isLoading } = useHttp(
    "http://localhost:3000/meals",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if (!loadedMeals) {
  //   return <p>No data</p>;
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
