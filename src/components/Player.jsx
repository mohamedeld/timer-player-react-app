import { useState,useRef } from "react";

export default function Player() {
    const [enteredPlayer,setEnteredPlayer] = useState(null);
    const playerName = useRef();
    const handleClick = ()=>{
        setEnteredPlayer(playerName.current.value);
        playerName.current.value = '';
    }
    return (
      <section id="player">
        <h2>Welcome {enteredPlayer ?? 'unknown entity'}</h2>
        <p>
          <input type="text" ref={playerName}/>
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  