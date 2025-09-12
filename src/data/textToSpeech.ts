import { Orca } from "@picovoice/orca-node";

import birdsWithoutFiles from "./birdsWithoutFiles";

const orca = new Orca((process.env.PICOVOICE_API_KEY || ""), {
  modelPath: './src/speech/orca_params_en_male.pv'
});

const textToSpeech = async () => {
  console.log(`Beginning textToSpeech...`);
  for (const bird of birdsWithoutFiles) {
    const result = await synthesizeForBird(bird);
    console.log(`result`, result);
  }
};

const synthesizeForBird = (bird: BirdWithoutFiles) => new Promise((resolve) => {
  const correctText = `That's correct!
  
This bird is the ${bird.speciesCommon}, (${bird.scientific}).`;
  const correctFilepath = `./src/responses/${bird.speciesCommon.split(" ").join("-")}-correct.wav`;
  orca.synthesizeToFile(correctText, correctFilepath);

  const incorrectText = `Sorry, that's incorrect.
  
This bird is the ${bird.speciesCommon}, (${bird.scientific}).`;
  const incorrectFilepath = `./src/responses/${bird.speciesCommon.split(" ").join("-")}-incorrect.wav`;
  orca.synthesizeToFile(incorrectText, incorrectFilepath);
  resolve({ message: `Audio generated for ${bird.speciesCommon}.`});
});

interface BirdWithoutFiles {
  order: string;
  family: string;
  scientific: string;
  familyCommon: string;
  speciesCommon: string;
};

textToSpeech();