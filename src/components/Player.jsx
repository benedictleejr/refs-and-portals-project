import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState("unknown entity");

  const handleSetName = () => {
    setPlayer(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {player || "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
