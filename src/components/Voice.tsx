import { useState, useEffect, useCallback } from "react";
import { MicVAD } from "@ricky0123/vad-web";
import Fuse from "fuse.js";

import Bird from "../data/bird";
import birdsAndCommands from "@/data/birdsAndCommands";
import float32ToWav from "../data/float32ToWav";
import { COMMANDS, MIC_STATES, STATES } from "../data/enums";

const fuse = new Fuse(birdsAndCommands, {
  keys: ['speciesCommon', 'value'],
  includeMatches: true,
  findAllMatches: true
});

function Voice(props: {
  state: STATES,
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void,
  nextPress: () => void
  setReplayAudio: (nextReplayAudio: boolean) => void
}) {
  const { state, bird, handleAnswer, nextPress, setReplayAudio } = props;

  const [micVAD, setMicVAD] = useState <MicVAD|null> (null);
  const [micState, setMicState] = useState <MIC_STATES> (MIC_STATES.CLEAN);
  const [pendingSpeech, setPendingSpeech] = useState <Float32Array<ArrayBufferLike>|null> (null);
  const [speechText, setSpeechText] = useState <string|null> (null);
  const [lastSpeechText, setLastSpeechText] = useState <string|null> (null);

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
      stopMic();
      setMicState(MIC_STATES.PROCESSING);
      const speechBuffer = new Float32Array(Object.values(speech));
      const blob = float32ToWav(speechBuffer, 16000);
      const speechToTextResult = await fetch("/speech", {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: blob
      });
      const speechTextObj = await speechToTextResult.json();
      if (speechTextObj?.speechText?.length > 2) {
        setSpeechText(speechTextObj.speechText);
      }
      else {
        setMicState(MIC_STATES.RECORDING);
        startMic();
      }
    };

    if (pendingSpeech) {
      const speech = Object.assign({}, pendingSpeech);
      setPendingSpeech(null);
      handlePendingSpeech(speech);
    }
  }, [pendingSpeech]);

  useEffect(() => {
    if (speechText && state === STATES.ANSWERING) {
      const matches = fuse.search(speechText);
      setLastSpeechText(speechText);
      setSpeechText(null);
      setMicState(MIC_STATES.RECORDING);
      startMic();
      const closestMatch = matches[0]?.item;
      if (!closestMatch) return;
      const replayCommands: string[] = [COMMANDS.AGAIN, COMMANDS.PLAY, COMMANDS.REPLAY];
      if (replayCommands.includes(closestMatch.value || '')) {
        setReplayAudio(true);
      }
      else {
        handleAnswer(closestMatch.speciesCommon === bird.speciesCommon);
      };
    }
    else if (speechText && state === STATES.ANSWERED){
      const matches = fuse.search(speechText);
      setLastSpeechText(speechText);
      setSpeechText(null);
      setMicState(MIC_STATES.RECORDING);
      startMic();
      const closestMatch = matches[0]?.item;
      if (!closestMatch) return;
      if (closestMatch.value === COMMANDS.NEXT) {
        nextPress();
      };
    };
  }, [state, speechText]);

  useEffect(() => {
    switch (state) {
      case STATES.ANSWERING:
        case STATES.ANSWERED:
        startMic();
        setMicState(MIC_STATES.RECORDING);
        break;

      case STATES.PLAYING:
      case STATES.REPLAYING:
      case STATES.REVIEWING:
        stopMic();
        setMicState(MIC_STATES.PAUSED);
        break;
    }
  }, [state]);

  const initializeMic = async () => {
    const nextMicVAD = await MicVAD.new({
      onSpeechEnd: (speech) => {
        setPendingSpeech(speech);
      }
    });
    setMicVAD(nextMicVAD);
    setMicState(MIC_STATES.READY);
  };
  
  const startMic = useCallback(() => {
    if (!micVAD) {
      setTimeout(() => startMic(), 100);
      return;
    }
    micVAD.start();
  }, [micState, micVAD]);

  const stopMic = useCallback(() => {
    if (micState === MIC_STATES.PAUSED || micState === MIC_STATES.PROCESSING) return;
    if (!micVAD) {
      setTimeout(() => stopMic(), 100);
      return;
    }
    micVAD.pause();
  }, [micState, micVAD]);

  return (
    <section className="voice-container panel">
      <div>{`bird: ${bird.speciesCommon}`}</div>
      <div>{`state: ${state}`}</div>
      <div>{`micState: ${micState}`}</div>
      <div>{`speechText: ${speechText || lastSpeechText}`}</div>
    </section>
  )
};

export default Voice;