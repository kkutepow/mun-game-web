import { Card } from './Card';
import { Player } from './Player';

export class Table {
    id: string;
    currentTurn: string;s
    players: Player[];
    doors: Card[];
    treasures: Card[];
}
