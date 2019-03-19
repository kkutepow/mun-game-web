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

    public doRequest(pid: string, cards: Card[], count: number): Promise<Card[]> {
        return new Promise<Card[]>((resolve, reject) => {
            let selectedCards: Card[] = [];
            while (Math.min(cards.length, count) > 0) {
                const cardIndex = Math.round(Math.random() * (cards.length - 1));
                selectedCards.push(cards[cardIndex]);
                cards.splice(cardIndex, 1);
                --count;
            }
            resolve(selectedCards);
        });
    }
}
