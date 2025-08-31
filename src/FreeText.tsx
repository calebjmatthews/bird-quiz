import { useState } from "react";
import Bird from "./bird";
import birds from "./birds";
import { GAME_MODES } from "./enums";

function FreeText(props: {
  bird: Bird,
  handleAnswer: (isCorrect: boolean) => void
}) {
  const { bird, handleAnswer } = props;
  
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(`inputValue`, inputValue);
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev?.target.value);
  };

  return (
    <form className="input-container" onSubmit={onSubmit}>
      <div className="input-control">
        <input
          type="text"
          id="free-input"
          className="input"
          placeholder="Bird name, common or scientific"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="input-submit-button">Go</button>
      </div>
    </form>
  );
};

export default FreeText;