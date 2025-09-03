import { useState } from "react";
import Main from "./Main";
import { GAME_MODES } from "../data/enums";

function App() {
  const [mode, setMode] = useState<GAME_MODES | null>(null);

  const modeChoices = [{
    id: GAME_MODES.MULT_EASY,
    name: "Multiple Choice - Easier",
    explanation: "Choose from four random birds."
  }, {
    id: GAME_MODES.MULT_HARD,
    name: "Multiple Choice - Harder",
    explanation: "Choose from six random birds."
    // explanation: "Choose from six birds, which are as related as possible."
  }, {
    id: GAME_MODES.TEXT_INPUT,
    name: "Free Text Input",
    explanation: "Type in your answer directly."
  }, {
    id: GAME_MODES.VOICE_INPUT,
    name: "Voice Input",
    explanation: "Say your answer out loud; play hands-free!"
  }];

  const modePress = (modeName: GAME_MODES) => {
    setMode(modeName);
  };

  if (mode === null) return (
    <div className="responsive-container">
      <h1 className="app-heading">
        <span>E.R.M.</span>
        <span className="app-heading-explaination">(Environmental Recording Match)</span>
        <span>Bird Quiz!</span>
      </h1>
      <p className="bare-text">Pick a mode:</p>
      <section className="choice-container">
        {modeChoices.map((modeChoice) => (
          <button
            key={modeChoice.id}
            className="choice-button"
            onClick={() => modePress(modeChoice.id)}
          >
            <span className="choice-button-title">{modeChoice.name}</span>
            <span>{modeChoice.explanation}</span>
          </button>
        ))}
      </section>
    </div>
  );

  return (<>
    <header className="page-header">
      <span className="page-title">ERM Bird Quiz</span>
    </header>
    <Main mode={mode} />
  </>);
};

export default App