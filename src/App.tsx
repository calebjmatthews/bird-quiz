import { useState, useCallback } from "react";

import Audio from "./Audio";
import Bird from "./bird";
import birds from "./birds";
import { STATES } from "./enums";
import "./index.css";

function App() {
  const [state, setState] = useState(STATES.CLEAN);
  const [birdList, setBirdList] = useState(createBirdList());
  const [bird, setBird] = useState <Bird> (birdList[0]);

  const pickBird = useCallback(() => {
    setBird(birdList[0]);
    setBirdList(birdList.slice(1));
  }, [birdList, setBird, setBirdList]);

  return (
    <div className="responsive-container">
      <h1>ERM (Environmental Recording Match) Bird Quiz!</h1>
      <Audio setState={setState} bird={bird} pickBird={pickBird} />
    </div>
  );
};

const createBirdList = () => {
  const birdList: Bird[] = birds.slice(); 

  for (let index = birdList.length - 1; index > 0; index--) {
    const toSwap = Math.floor(Math.random() * (index + 1));
    [birdList[index], birdList[toSwap]] = [birdList[toSwap], birdList[index]];
  }

  return birdList;
};

export default App;