import FreeText from "./FreeText";
import MultipleChoice from "./MultipleChoice";
import Bird from "./bird";
import { GAME_MODES } from "./enums";

function AnswerControls(props: {
  mode: GAME_MODES,
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { mode, bird, handleAnswer } = props;

  if (mode === GAME_MODES.MULT_EASY || mode === GAME_MODES.MULT_HARD) {
    return <MultipleChoice mode={mode} bird={bird} handleAnswer={handleAnswer} />;
  }

  else if (mode === GAME_MODES.TEXT_INPUT) {
    return <FreeText bird={bird} handleAnswer={handleAnswer} />;
  }

  return null;
};

export default AnswerControls