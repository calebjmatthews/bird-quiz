import { useState, useCallback } from "react";

import Audio from "./Audio";
import Bird from "./bird";
import birds from "./birds";
import shuffleArray from "./shuffleArray";
import { STATES } from "./enums";
import "./index.css";
import MultipleChoice from "./MultipleChoice";

function App() {
  const [state, setState] = useState(STATES.CLEAN);
  const [birdList, setBirdList] = useState <Bird[]> (shuffleArray(birds));
  const [bird, setBird] = useState <Bird> (birdList[0]);
  const [feedback, setFeedback] = useState <string|null> (null);

  const pickBird = useCallback(() => {
    const nextBirdList = birdList.slice(1);
    setBirdList(nextBirdList);
    setBird(nextBirdList[0]);
  }, [birdList, setBird, setBirdList]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setFeedback(`That's correct, the ${bird.speciesCommon}!`);
    else setFeedback(`Sorry, that's incorrect. It's the ${bird.speciesCommon}.`);
    pickBird();
    setState(STATES.CLEAN);
  };

  return (
    <div className="responsive-container">
      <h1 className="app-heading">ERM (Environmental Recording Match) Bird Quiz</h1>
      <Audio state={state} setState={setState} bird={bird} />
      {state === (STATES.ANSWERING) && (
        <MultipleChoice bird={bird} handleAnswer={handleAnswer} />
      )}
      {state === (STATES.CLEAN) && (
        <span>{feedback}</span>
      )}
    </div>
  );
};

export default App;