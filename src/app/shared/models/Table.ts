import { Card } from './Card';
import { Player } from './Player';

export class Table {
    currentTurn: string;
    players: Player[];
    doors: Card[];
    treasures: Card[];
}
