import { useRef, useState } from "react";

import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal, { ModalRef } from "./components/Modal"; // Import the ModalRef type.
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";

interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

function App() {
  const modal = useRef<ModalRef | null>(null); // Use ModalRef type here.
  const selectedPlace = useRef<string | null>(null);
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>([]);

  function handleStartRemovePlace(id: string) {
    if (modal.current) {
      modal.current.open(); // Now 'open' is recognized.
      selectedPlace.current = id;
    }
  }

  function handleStopRemovePlace() {
    if (modal.current) {
      modal.current.close(); // Now 'close' is recognized.
      selectedPlace.current = null;
    }
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
  }

  function handleRemovePlace() {
    if (selectedPlace.current) {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      modal.current?.close(); // Now 'close' is recognized.
      selectedPlace.current = null;
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

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
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
