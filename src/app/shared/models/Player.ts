import { Card } from './Card';

export class Player {
    name: string;
    openHand: Card[];
    closeHand: Card[];
    equipment: {
        curses: Card[];
        head: Card[];
        body: Card[];
        legs: Card[];
        cheat: Card[];
        slave: Card[];
        other: Card[];
    };
    level: number;
}