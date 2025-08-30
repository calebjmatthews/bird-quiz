import { useRef, useCallback, useState, useEffect } from "react";

import PlayIcon from "./icons/play";
import Bird from "./bird"
import { STATES } from "./enums";
import PauseIcon from "./icons/pause";
import ReplayIcon from "./icons/replay";

function Audio(props: {
  state: STATES,
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  bird: Bird|null,
  abortAudio: boolean,
  setAbortAudio: (nextAbortAudio: boolean) => void
}) {
  const { state, setState, bird, abortAudio, setAbortAudio } = props;

  const [buttonBackgroundStyle, setButtonBackgroundStyle] = useState({});

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  useEffect(() => {
    if (abortAudio) {
      setAbortAudio(true);
      audioPlayer.current?.pause();
      setButtonBackgroundStyle({
      transform: `scaleX(0%)`,
      transitionDuration: '0s'
    });
    }
  }, [abortAudio]);

  const audioButtonPress = () => {
    if (state === STATES.CLEAN) {
      setState(STATES.PLAYING);
      playAudio();
    }
    else if (state === STATES.PLAYING) {
      setState(STATES.PAUSED);
      pauseAudio();
    }
    else if (state === STATES.PAUSED) {
      setState(STATES.PLAYING);
      resumeAudio();
    }
    else if (state === STATES.ANSWERING) {
      setState(STATES.REPLAYING);
      playAudio();
    }
    else if (state === STATES.REPLAYING) {
      setState(STATES.REPLAYING_PAUSED);
      pauseAudio();
    }
    else if (state === STATES.REPLAYING_PAUSED) {
      setState(STATES.REPLAYING);
      resumeAudio();
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
    setButtonBackgroundStyle({
      transform: `scaleX(${scalePercent}%)`,
      transitionDuration: '0s'
    });
  }, [audioPlayer]);

  const resumeAudio = useCallback(() => {
    if (!audioPlayer.current) return;
    audioPlayer.current.play();
    setButtonBackgroundStyle({
      transform: "scaleX(200%)",
      transitionDuration: `${audioPlayer.current.duration - audioPlayer.current.currentTime}s`
    });
  }, [audioPlayer]);

  const playingComplete = () => {
    setState(STATES.ANSWERING);
    setButtonBackgroundStyle({
      transform: `scaleX(0%)`,
      transitionDuration: '0s'
    });
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
        {(state === STATES.CLEAN || state === STATES.PAUSED || state === STATES.REPLAYING_PAUSED) && <PlayIcon />}
        {(state === STATES.PLAYING || state === STATES.REPLAYING) && <PauseIcon />}
        {state === STATES.ANSWERING && <ReplayIcon />}
      </button>
    </section>
  );
};

export default Audio;