import { RoundPhase, Gender, Race, Class, CardSlot } from '../enums/enums';

export class GameContext {
    player: PlayerContext;
    selectedOpponent: PlayerContext;
    tableCards: CardContext[][];

    opponents: PlayerContext[];
}

export class PlayerContext {
    id: string;
    name: string;
    level: number;

    cards: CardContext[];
}

export class CardContext {
    currentSlot: CardSlot;
    faceUrl: string;
    backUrl: string;
}
