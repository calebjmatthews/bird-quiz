import { useEffect, useRef, useCallback } from "react";

import { STATES } from "../data/enums"

function VoiceResponse(props: {
  state: STATES,
  setState: React.Dispatch<React.SetStateAction<STATES>>,
  responseAudio: any
}) {
  const { state, setState, responseAudio } = props;

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  useEffect(() => {
    if (state === STATES.LISTENING_REPLY) {
      playAudio();
    }
  });

  const playAudio = useCallback(() => {
    if (!audioPlayer?.current) {
      setTimeout(() => playAudio(), 100);
      return;
    };
    audioPlayer.current.play();
  }, [audioPlayer]);

  const playingComplete = () => {
    setState(STATES.ANSWERED);
  };

  return (
    <audio ref={audioPlayer} src={responseAudio} onEnded={playingComplete}>
      Your browser does not support the audio element.
    </audio>
  );
};

export default VoiceResponse;