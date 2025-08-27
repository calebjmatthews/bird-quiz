import { useState, useCallback } from "react";

import Audio from "./Audio";
import Bird from "./bird";
import birds from "./birds";
import { STATES } from "./enums";
import "./index.css";

function App() {
  const [state, setState] = useState(STATES.CLEAN);
  const [bird, setBird] = useState <Bird|null> (null);

  const fetchBird = useCallback(() => {
    const nextBird = birds[Math.floor(Math.random() * birds.length)];
    setBird(nextBird);
    return nextBird;
  }, [setBird]);

  return (
    <div className="responsive-container">
      <h1>ERM (Environmental Recording Match) Bird Quiz!</h1>
      <Audio setState={setState} bird={bird} fetchBird={fetchBird} />
    </div>
  );
}

export default App;