export enum STATES {
  CLEAN = "Clean",
  PLAYING = "Playing",
  PAUSED = "Paused",
  ANSWERING = "Answering",
  REPLAYING = "Replaying",
  REPLAYING_PAUSED = "Replaying paused",
  ANSWERED = "Answered",
  REVIEWING = "Reviewing",
  REVIEWING_PAUSED = "Reviewing paused"
};

export enum MIC_STATES {
  CLEAN = "Clean",
  INITIALIZE = "Initialize",
  INITIALIZING = "Initializing",
  RECORDING = "Recording",
  PAUSED = "Paused"
};

export enum GAME_MODES {
  MULT_EASY = "Multiple choice easier",
  MULT_HARD = "Multiple choice harder",
  TEXT_INPUT = "Free text input",
  VOICE_INPUT = "Voice input",
};