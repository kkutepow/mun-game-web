import { RoundPhase, Gender, Race, Class, CardSlot, Commands } from '../enums/enums';
import { CommandOptions } from '../commands/command.options';

export class GameContract {
    currentTurn: string;
    currentPhase: RoundPhase;
    requests: RequestContract[];
    players: PlayerContract[];
    cards: CardContract[];
}

export class PlayerContract {
    id: string;
    name: string;
    level: number;
    gender: Gender;
}

export class CardContract {
    //card face
    id: string;
    cardName: string;

    //card static options
    isDoor: boolean;
    isBigItem: boolean;

    //set if card has class/race meaning
    raceCard?: Race;
    classCard?: Class;

    //set if card has requirements for special slot/race/class
    requiredRace?: Race;
    requiredClass?: Class;
    requiredSlot?: CardSlot;

    //card dynamic options
    owner: string;
    currentSlot: CardSlot;
    linkedTo: string;
}

export class RequestContract {
    //geodata
    authorId: string;
    targetId: string;

    //buttons
    actions: RequestAction[];
}

export class RequestAction {
    label: string;
    command: Commands;
    commandArgs: CommandOptions;
}