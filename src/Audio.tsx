import { useRef, useCallback } from "react";

import Bird from "./bird"
import { STATES } from "./enums";

function Audio(props: {
  state: STATES,
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  bird: Bird|null
}) {
  const { setState, bird  } = props;

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
  }, [audioPlayer, bird]);

  const playingComplete = () => {
    setState(STATES.ANSWERING);
  };

  return (
    <section>
      {bird && (
        <audio ref={audioPlayer} src={bird.audio} onEnded={playingComplete}>
          Your browser does not support the audio element.
        </audio>
      )}
      <button role="button" onClick={playPress}>
        Play
      </button>
      {}
    </section>
  );
};

export default Audio;