import { Injectable, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Table } from '../models/Table';
import { GameData } from '../data/gameData';
import { Player } from '../models/Player';
import { CardSlot } from '../models/Card';

@Injectable({
    providedIn: 'root',
})
export class GameService implements OnInit {
    ref = null;

    tableExample = new Table();

    constructor(private db: AngularFireDatabase) {
        this.ref = this.db.list('/tables');
        console.log("here", GameData.getAllDoors());

        this.tableExample.doors = GameData.getAllDoors();
        this.tableExample.treasures = GameData.getAllTreasures();
        this.tableExample.currentTurn = 'p1';
        this.tableExample.players = [
            //player one
            {
                id: 'p1',
                level: 1,
                gender: 'm',
                name: 'Player1',
                cards: {},
            } as Player,
            //player two
            {
                id: 'p2',
                level: 1,
                gender: 'm',
                name: 'Player2',
                cards: {},
            } as Player,
            //player three
            {
                id: 'p3',
                level: 1,
                gender: 'f',
                name: 'Player3',
                cards: {},
            } as Player,
        ];
    }

    ngOnInit() {
    }

    getTables(): Observable<any> {
        console.log('yo2', this.ref);
        return this.ref.valueChanges();
    }

    addTable(table?: Table): void {
        this.ref.push(table ? table : this.tableExample);
    }

    updateTable(key: string, table: Table) {
        this.ref.update(key, table);
    }

    removeAllTables() {
        this.ref.remove();
    }
}
