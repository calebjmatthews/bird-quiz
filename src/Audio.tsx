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

  const playPress = () => {
    setState(STATES.PLAYING);
    playAudio();
  };

  const playAudio = useCallback(() => {
    if (!audioPlayer?.current) {
      setTimeout(() => playAudio(), 100);
      return;
    };
    audioPlayer.current.play();
    setButtonBackgroundStyle({
      transform: "scaleX(200%)",
      "transitionDuration": `${audioPlayer.current.duration}s`
    });
  }, [audioPlayer, bird]);

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
      <button role="button" onClick={playPress} className="audio-button">
        <div className="audio-button-background" style={buttonBackgroundStyle} />
        {state === STATES.CLEAN && <PlayIcon />}
        {state === STATES.PLAYING && <PauseIcon />}
        {state === STATES.ANSWERING && <ReplayIcon />}
      </button>
    </section>
  );
};

export default Audio;