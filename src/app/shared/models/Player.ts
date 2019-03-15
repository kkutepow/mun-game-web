import { Card } from './Card';

export class Player {
    id: string;
    name: string;
    level: number;

    // decks
    openHand: Card[];
    closeHand: Card[];
    curses: Card[];
    head: Card[];
    body: Card[];
    legs: Card[];
    cheat: Card[];
    slave: Card[];
    other: Card[];
}
