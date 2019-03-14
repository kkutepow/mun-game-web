import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    ref = null;
    table = {
        currentTurn: 'player1',
        gameState: 'default',
        players: [
            {
                name: 'player1',
                openHand: [
                    {
                        cardName: 'card 1',
                        key: 1,
                        availableActions: ['discard'],
                    },
                    {
                        cardName: 'card 2',
                        key: 2,
                        availableActions: ['discard'],
                    },
                ],
                closeHand: [],
                equipment: {
                    head: [],
                    body: [],
                    legs: [],
                    curses: [],
                    cheat: [],
                    slave: [],
                    other: [],
                },
            },
            {
                name: 'player2',
                openHand: [
                    {
                        cardName: 'card 3',
                        key: 3,
                        availableActions: ['discard'],
                    },
                    {
                        cardName: 'card 4',
                        key: 4,
                        availableActions: ['discard'],
                    },
                ],
                closeHand: [],
                equipment: {
                    head: [],
                    body: [],
                    legs: [],
                    curses: [],
                    cheat: [],
                    slave: [],
                    other: [],
                },
            },
            {
                name: 'player3',
                openHand: [
                    {
                        cardName: 'card 3',
                        key: 3,
                        availableActions: ['discard'],
                    },
                    {
                        cardName: 'card 4',
                        key: 4,
                        availableActions: ['discard'],
                    },
                ],
                closeHand: [],
                equipment: {
                    head: [],
                    body: [],
                    legs: [],
                    curses: [],
                    cheat: [],
                    slave: [],
                    other: [],
                },
            },
        ],
    };

    constructor(private db: AngularFireDatabase) {
        console.log('here:');
        // this.db.list('/tables').push(this.table);
    }

    ngOnInit() {}

    getPlayers(): Observable<any> {
        return this.db.list('/tables').valueChanges();
    }

    addPlayer(data): void {
        // this.db.list('/tables').push(this.table);
    }

    doAction(playerId: any, cardId: any, action: any): any {
        console.log(`try to do ${action} with ${cardId} by ${playerId}`);
    }
}
