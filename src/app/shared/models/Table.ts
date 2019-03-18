import { Card } from './Card';
import { Player } from './Player';

export class Table {
    id: string;
    currentTurn: string;
    players: Player[];
    doors: Card[];
    treasures: Card[];

    public getPlayer(pid: string): Player {
        let player = this.players.find(p => p.id === pid);
        if (!player) {
            throw `Player with pid=${pid} not found`;
        }
        return player;
    }

    public setPlayer(pid: string, changed: Player): void {
        let exists = false;
        this.players = this.players.map(p => {
            exists = exists || p.id === pid;
            return p.id === pid ? changed : p;
        });

        if (!exists) {
            throw `Player with pid=${pid} not found`;
        }
    }
}
