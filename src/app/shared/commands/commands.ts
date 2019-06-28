import { Commands } from '../enums/enums';
import { DropCardCommand } from './game-commands';

export class GameCommands {
    constructor() {
        this[Commands.DropCard] = DropCardCommand;
    }
}
