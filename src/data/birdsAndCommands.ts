import birds from './birds';
import { COMMANDS } from "./enums";

interface BirdOrCommand {
  audio?: any;
  order?: string;
  family?: string;
  familyCommon?: string;
  speciesCommon?: string;
  value?: string;
};

const birdsAndCommands: BirdOrCommand[] = [
  ...birds,
  { value: COMMANDS.AGAIN },
  { value: COMMANDS.NEXT },
];

export default birdsAndCommands;