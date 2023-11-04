import { useEffect, useRef, useState } from "react";

import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc";

interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ModalRef {
  open: () => void;
  close: () => void;
}

interface SortedPlacesType {
  lat: number;
  lon: number;
}

// 앱이 시작할때마다 불러올 이유는 없어서 App 함수 밖으로 뺀다.
const storedIds =
  JSON.parse(localStorage.getItem("selectedPlaces") as string) || [];
const storedPlaces = storedIds.map((id: string) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(storedPlaces);
  const [availabelPlaces, setAvailabelPlaces] = useState<SortedPlacesType[]>(
    []
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailabelPlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id: string) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id: string) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      if (place) {
        return [place, ...prevPickedPlaces];
      }
      return prevPickedPlaces;
    });

    const storedIds =
      JSON.parse(localStorage.getItem("selectedPlaces") as string) || [];

    if (storedIds.indexOf(id) === -1) {
      // 만약 id가 존재하지 않는다면 추가, 존재하면 추가하지않음
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds =
      JSON.parse(localStorage.getItem("selectedPlaces") as string) || [];

    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(
        storedIds.filter((id: string) => id !== selectedPlace.current)
      )
    );
  }

  return (
    <>
      {modalIsOpen && (
        <Modal open={modalIsOpen}>
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
          />
        </Modal>
      )}

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          여행하고 싶은 장소를 선택하거나 방문한 장소의 개인 컬렉션을 만드세요.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={"Select the places you would like to visit below."}
          places={availabelPlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
