import { useMemo } from "react";
import Bird from "./bird";
import birds from "./birds";
import shuffleArray from "./shuffleArray";

function MultipleChoice(props: {
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { bird, handleAnswer } = props;

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
    for (let loop = 1; loop < 4; loop++) {
      nextOptions.push(getBird(nextOptions));
    };
    
    const shuffledArray = shuffleArray(nextOptions);
    return shuffledArray;
  }, [bird]);

  const optionPress = (option: Bird) => (
    handleAnswer(option.speciesCommon === bird.speciesCommon)
  );

  return (
    <form>
      {options.map((option) => (
        <button key={option.speciesCommon} onClick={() => optionPress(option)}>
          {option.speciesCommon}
        </button>
      ))}
    </form>
  );
};

export default MultipleChoice;