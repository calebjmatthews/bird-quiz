import birds from './birds';
import { COMMANDS } from "./enums";

interface BirdOrCommand {
  audio?: any[];
  mnemonic?: string;
  images?: any[];
  order?: string;
  family?: string;
  scientific?: string;
  familyCommon?: string;
  speciesCommon?: string;
  value?: string;
};

const birdsAndCommands: BirdOrCommand[] = [
  ...birds,
  { value: COMMANDS.AGAIN },
  { value: COMMANDS.NEXT },
  { value: COMMANDS.REPLAY },
  { value: COMMANDS.PLAY },
];

export default birdsAndCommands;