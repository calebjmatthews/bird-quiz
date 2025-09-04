import { useState, useEffect, useCallback } from "react";
import { MicVAD } from "@ricky0123/vad-web";

import Bird from "../data/bird";
import birds from "../data/birds";
import float32ToWav from "../data/float32ToWav";
import { MIC_STATES, STATES } from "../data/enums";

function Voice(props: {
  state: STATES,
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { state, bird, handleAnswer } = props;

  const [micVAD, setMicVAD] = useState <MicVAD|null> (null);
  const [micState, setMicState] = useState <MIC_STATES> (MIC_STATES.CLEAN);
  const [pendingSpeech, setPendingSpeech] = useState <Float32Array<ArrayBufferLike>|null> (null);
  const [speechText, setSpeechText] = useState <string|null> (null);

  useEffect(() => {
    if (micState === MIC_STATES.CLEAN) {
      setMicState(MIC_STATES.INITIALIZE);
    }

    else if (micState === MIC_STATES.INITIALIZE) {
      setMicState(MIC_STATES.INITIALIZING);
      initializeMic();
    }
  }, [micState]);

  useEffect(() => {
    const handlePendingSpeech = async (speech: Float32Array<ArrayBufferLike>) => {
      const speechBuffer = new Float32Array(Object.values(speech));
      const blob = float32ToWav(speechBuffer, 16000);
      const speechToTextResult = await fetch("/speech", {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: blob
      });
      const speechTextObj = await speechToTextResult.json();
      console.log(`speechTextObj`, speechTextObj);
      setSpeechText(speechTextObj.speechText);
    };

    if (pendingSpeech) {
      const speech = Object.assign({}, pendingSpeech);
      setPendingSpeech(null);
      handlePendingSpeech(speech);
    }
  }, [pendingSpeech]);

  const initializeMic = async () => {
    const nextMicVAD = await MicVAD.new({
      onSpeechEnd: (speech) => {
        setPendingSpeech(speech);
      }
    });
    nextMicVAD.start();
    setMicVAD(nextMicVAD);
    setMicState(MIC_STATES.READY);
  };

  return (
    <section className="voice-container panel">
      <div>{`micState: ${micState}`}</div>
      <div>{speechText}</div>
    </section>
  )
};

export default Voice;