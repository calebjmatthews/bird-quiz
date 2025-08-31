import { useMemo } from "react";
import Bird from "./bird";
import birds from "./birds";
import shuffleArray from "./shuffleArray";
import { GAME_MODES } from "./enums";

function MultipleChoice(props: {
  mode: GAME_MODES,
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { mode, bird, handleAnswer } = props;

  const options: Bird[] = useMemo(() => {
    const getBird = (currentOptions: Bird[]) => {
      for (let loop = 0; loop < 1000; loop++) {
        const nextBird = birds[Math.floor(Math.random() * birds.length)];
        const nameMatch = currentOptions.filter(
          (b) => nextBird.speciesCommon === b.speciesCommon
        ).length > 0;
        if (!nameMatch) return nextBird;
      }
      return birds[0];
    };

    const nextOptions = [bird];
    for (let loop = 1; loop < (mode === GAME_MODES.MULT_EASY ? 4 : 6); loop++) {
      nextOptions.push(getBird(nextOptions));
    };
    
    const shuffledArray = shuffleArray(nextOptions);
    return shuffledArray;
  }, [bird]);

  const optionPress = (option: Bird) => (
    handleAnswer(option.speciesCommon === bird.speciesCommon)
  );

  return (
    <section className="choice-container">
      {options.map((option) => (
        <button
          key={option.speciesCommon}
          className="choice-button"
          onClick={() => optionPress(option)}
        >
          {option.speciesCommon}
        </button>
      ))}
    </section>
  );
};

export default MultipleChoice;