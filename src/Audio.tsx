import { useRef, useCallback } from "react";

import Bird from "./bird"
import { STATES } from "./enums";

function Audio(props: {
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  bird: Bird|null,
  pickBird: () => void
}) {
  const { setState, bird, pickBird  } = props;

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  const playPress = () => {
    setState(STATES.PLAYING);
    playAudio();
  };

  const playAudio = useCallback(() => {
    console.log(`playAudio called`);
    if (!bird) {
      pickBird();
    };
    if (!audioPlayer?.current) {
      console.log(`Setting timeout`);
      setTimeout(() => playAudio(), 100);
      return;
    };
    console.log(`Before audioPlayer.current.play`);
    audioPlayer.current.play();
  }, [audioPlayer, bird]);

  return (
    <section>
      {bird && (
        <audio ref={audioPlayer} src={bird.audio}>
          Your browser does not support the audio element.
        </audio>
      )}
      <button role="button" onClick={playPress}>
        Play
      </button>
      {bird?.speciesCommon}
    </section>
  );
};

export default Audio;