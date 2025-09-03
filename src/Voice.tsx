import { useState, useEffect } from "react";
import { MicVAD } from "@ricky0123/vad-web";

import Bird from "./bird";
import birds from "./birds";
import { MIC_STATES } from "./enums";

function Voice(props: {
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { bird, handleAnswer } = props;

  const [micState, setMicState] = useState <MIC_STATES> (MIC_STATES.CLEAN);

  useEffect(() => {
    if (micState === MIC_STATES.CLEAN) {
      setMicState(MIC_STATES.INITIALIZE);
    }

    else if (micState === MIC_STATES.INITIALIZE) {
      setMicState(MIC_STATES.INITIALIZING);
      initializeMic();
    }
  }, [micState]);

  const initializeMic = async () => {
    const myvad = await MicVAD.new({
      onSpeechEnd: (audio) => {
        console.log(`audio`, audio);
        // do something with `audio` (Float32Array of audio samples at sample rate 16000)...
      }
    })
    myvad.start()
  };

  return (
    <section className="voice-container">
      
    </section>
  )
};

export default Voice;