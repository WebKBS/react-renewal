import { useState } from "react";

interface PlayerProps {
  name: string;
  symbol: string;
}

export default function Player({ name, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  // const [changeInput, setChangeInput] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // 편집된 상태에서 최신상태를 얻는다. (모범사례)
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
