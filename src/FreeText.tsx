import { useState } from "react";
import Fuse from "fuse.js";

import Bird from "./bird";
import birds from "./birds";
import { GAME_MODES } from "./enums";

const fuse = new Fuse(birds, { keys: ['speciesCommon'], includeMatches: true, findAllMatches: true });

function FreeText(props: {
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { bird, handleAnswer } = props;
  
  const [inputValue, setInputValue] = useState("");
  const [matches, setMatches] = useState<Bird[]>([]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const nextInputValue = ev?.target.value;
    setInputValue(nextInputValue);

    const nextMatches = fuse.search(nextInputValue);
    setMatches(nextMatches.map((match) => match.item));
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const closestMatch = matches[0];
    if (!closestMatch) return;
    handleAnswer(closestMatch.speciesCommon === bird.speciesCommon);
  };

  const onMatchPress = (match: Bird) => (
    handleAnswer(match.speciesCommon === bird.speciesCommon)
  );

  return (
    <form className="input-container" onSubmit={onSubmit}>
      <div className="input-control">
        <input
          type="text"
          id="free-input"
          className="input"
          placeholder="Bird name, common or scientific"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="input-submit-button">Go</button>
      </div>
      {matches.length > 0 && (
        <ul className="search-match-container">
          {matches.map((match) => (
            <li
              key={match.speciesCommon}
              className="search-match"
              onClick={() => onMatchPress(match)}
            >
              {match.speciesCommon}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default FreeText;