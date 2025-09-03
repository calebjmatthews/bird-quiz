import { useState, useCallback } from "react";

import Audio from "./Audio";
import AnswerControls from "./AnswerControls";
import ArrowIcon from "./icons/arrow";
import Bird from "./bird";
import birds from "./birds";
import shuffleArray from "./shuffleArray";
import { GAME_MODES, STATES } from "./enums";
import "./index.css";

function Main(props: {
  mode: GAME_MODES
}) {
  const { mode } = props;
  const [state, setState] = useState(STATES.CLEAN);
  const [birdList, setBirdList] = useState <Bird[]> (shuffleArray(birds));
  const [bird, setBird] = useState <Bird> (birdList[0]);
  const [feedback, setFeedback] = useState <string|null> (null);
  const [abortAudio, setAbortAudio] = useState(false);

  const pickBird = useCallback(() => {
    const nextBirdList = birdList.slice(1);
    setBirdList(nextBirdList);
    setBird(nextBirdList[0]);
  }, [birdList, setBird, setBirdList]);

  const handleAnswer = (isCorrect: boolean) => {
    if (state === STATES.REPLAYING || state === STATES.REPLAYING_PAUSED) setAbortAudio(true);
    if (isCorrect) setFeedback(`That's correct, the ${bird.speciesCommon}!`);
    else setFeedback(`Sorry, that's incorrect. It's the ${bird.speciesCommon}.`);
    setState(STATES.ANSWERED);
  };

  const nextPress = () => {
    if (state === STATES.REPLAYING || state === STATES.REPLAYING_PAUSED || state === STATES.REVIEWING || state === STATES.REVIEWING_PAUSED) setAbortAudio(true);
    setState(STATES.CLEAN);
    pickBird();
  };

  return (
    <div className="responsive-container main">
      <div className="buttons-container">
        <Audio
          state={state}
          setState={setState}
          bird={bird}
          abortAudio={abortAudio}
          setAbortAudio={setAbortAudio}
        />
        {(state === STATES.ANSWERED || state === STATES.REVIEWING || state === STATES.REVIEWING_PAUSED) && (
          <button className="next-button" onClick={nextPress}>
            Next<ArrowIcon />
          </button>
        )}
      </div>
      {(state === STATES.ANSWERING || state === STATES.REPLAYING || state === STATES.REPLAYING_PAUSED) && (
        <AnswerControls mode={mode} bird={bird} handleAnswer={handleAnswer} />
      )}
      {(state === STATES.ANSWERED || state === STATES.REVIEWING || state === STATES.REVIEWING_PAUSED) && (
        <p className="panel">{feedback}</p>
      )}
    </div>
  );
};

export default Main;