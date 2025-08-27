import { useRef } from "react";

import Bird from "./bird"
import { STATES } from "./enums";

function Audio(props: {
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  bird: Bird|null,
  fetchBird: () => Bird
}) {
  const { setState, bird, fetchBird  } = props;

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  const playPress = () => {
    if (!bird) {
      const newBird = fetchBird();
    };
    if (!audioPlayer?.current) return;
    audioPlayer.current.play();
  };

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