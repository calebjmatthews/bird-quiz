import { useRef, useCallback, useState } from "react";

import PlayIcon from "./icons/play";
import Bird from "./bird"
import { STATES } from "./enums";
import PauseIcon from "./icons/pause";
import ReplayIcon from "./icons/replay";

function Audio(props: {
  state: STATES,
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  bird: Bird|null
}) {
  const { state, setState, bird  } = props;

  const [buttonBackgroundStyle, setButtonBackgroundStyle] = useState({});

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  const audioButtonPress = () => {
    if (state === STATES.CLEAN) {
      setState(STATES.PLAYING);
      playAudio();
    }
    else if (state === STATES.PLAYING) {
      setState(STATES.PAUSED);
      pauseAudio();
    }
  };

  const playAudio = useCallback(() => {
    if (!audioPlayer?.current) {
      setTimeout(() => playAudio(), 100);
      return;
    };
    audioPlayer.current.play();
    setButtonBackgroundStyle({
      transform: "scaleX(200%)",
      transitionDuration: `${audioPlayer.current.duration}s`
    });
  }, [audioPlayer]);

  const pauseAudio = useCallback(() => {
    if (!audioPlayer.current) return;
    audioPlayer.current.pause();
    const scalePercent = (100 - (
      -(audioPlayer.current.currentTime - audioPlayer.current.duration) / audioPlayer.current.duration
    ) * 100) * 2;
    console.log(`scalePercent`, scalePercent);
    setButtonBackgroundStyle({
      transform: `scaleX(${scalePercent}%)`,
      transitionDuration: '0s'
    });
  }, [audioPlayer]);

  const playingComplete = () => {
    setState(STATES.ANSWERING);
  };

  return (
    <section className="audio-container">
      {bird && (
        <audio ref={audioPlayer} src={bird.audio} onEnded={playingComplete}>
          Your browser does not support the audio element.
        </audio>
      )}
      <button role="button" onClick={audioButtonPress} className="audio-button">
        <div className="audio-button-background" style={buttonBackgroundStyle} />
        {(state === STATES.CLEAN || state === STATES.PAUSED) && <PlayIcon />}
        {state === STATES.PLAYING && <PauseIcon />}
        {state === STATES.ANSWERING && <ReplayIcon />}
      </button>
    </section>
  );
};

export default Audio;