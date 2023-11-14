import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const response = await fetch("http://localhost:3000/placs");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("데이터 페칭 실패");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        console.log(error);
        setError({ message: error.message || "데이터 페치가 실패했습니다." });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="데이터 페치 실패" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
