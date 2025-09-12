import { useState, useCallback } from "react";

import Audio from "./Audio";
import AnswerControls from "./AnswerControls";
import Voice from "./Voice";
import ArrowIcon from "./icons/arrow";
import Bird from "../data/bird";
import birds from "../data/birds";
import shuffleArray from "../data/shuffleArray";
import Stats from "../data/stats";
import { GAME_MODES, STATES } from "../data/enums";
import "../index.css";
import BirdCard from "./BirdCard";
import VoiceResponse from "./VoiceResponse";

function Main(props: {
  mode: GAME_MODES
}) {
  const { mode } = props;
  const [state, setState] = useState(STATES.CLEAN);
  const [birdList, setBirdList] = useState <Bird[]> (shuffleArray(birds));
  const [bird, setBird] = useState <Bird> (birdList[0]);
  const [feedback, setFeedback] = useState <React.JSX.Element|null> ();
  const [stats, setStats] = useState <Stats> ({ correct: 0, total: 0, streak: 0 })
  const [abortAudio, setAbortAudio] = useState(false);
  const [replayAudio, setReplayAudio] = useState(false);
  const [responseAudio, setResponseAudio] = useState <any> (null);

  const pickBird = useCallback(() => {
    const nextBirdList = birdList.slice(1);
    setBirdList(nextBirdList);
    setBird(nextBirdList[0]);
  }, [birdList, setBird, setBirdList]);

  const handleAnswer = (isCorrect: boolean) => {
    if (state === STATES.REPLAYING || state === STATES.REPLAYING_PAUSED) setAbortAudio(true);
    if (isCorrect) {
      setFeedback(<span>{`That's correct!`}</span>);
      setStats({
        correct: (stats.correct + 1),
        total: (stats.total + 1),
        streak: (stats.streak + 1)
      });
    }
    else {
      setFeedback(<span>{`Sorry, that's incorrect.`}</span>);
      setStats({
        correct: stats.correct,
        total: (stats.total + 1),
        streak: 0
      });
    }

    if (mode !== GAME_MODES.VOICE_INPUT) {
      setState(STATES.ANSWERED);
      return;
    }
    
    setState(STATES.LISTENING_REPLY);
    setResponseAudio(bird.responses[isCorrect ? 0 : 1])
  };

  const nextPress = () => {
    if (state === STATES.REPLAYING || state === STATES.REPLAYING_PAUSED || state === STATES.REVIEWING || state === STATES.REVIEWING_PAUSED) setAbortAudio(true);
    setState(STATES.CLEAN);
    pickBird();
  };

  return (
    <>
      <header className="page-header">
        <div className="responsive-container page-header-contents">
          <span className="page-title">ERM Bird Quiz</span>
          {stats.total > 0 && (
            <div className="score-container">
              <span>{`${stats.correct}/${stats.total}`}</span>
              {stats.streak > 1 && (
                <span>{`Streak: ${stats.streak}`}</span>
              )}
            </div>
          )}
        </div>
      </header>
      <div className="responsive-container main">
        <div className="buttons-container">
          <Audio
            state={state}
            setState={setState}
            bird={bird}
            abortAudio={abortAudio}
            setAbortAudio={setAbortAudio}
            replayAudio={replayAudio}
            setReplayAudio={setReplayAudio}
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
        {(mode === GAME_MODES.VOICE_INPUT) && (
          <>
            <Voice state={state} bird={bird} handleAnswer={handleAnswer} nextPress={nextPress} setReplayAudio={setReplayAudio} />
            <VoiceResponse state={state} setState={setState} responseAudio={responseAudio} />
          </>
        )}
        {(state === STATES.ANSWERED || state === STATES.REVIEWING || state === STATES.REVIEWING_PAUSED || state === STATES.LISTENING_REPLY) && (
          <>
            <p className="panel">{feedback}</p>
            <BirdCard bird={bird} />
          </>
        )}
      </div>
    </>
  );
};

export default Main;