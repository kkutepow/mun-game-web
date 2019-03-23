import { Component, OnInit } from '@angular/core';
import { GameService } from './shared/services/game.service';

import { CookieService } from 'ngx-cookie-service';
import { Card, CardSlot } from './shared/models/Card';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Player } from './shared/models/Player';
import { Table } from './shared/models/Table';
import { GameData } from './shared/data/gameData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    title = 'munchkin-game';
    currentPlayerName = null;
    table: Table;
    player: Player;
    tableKey: string;

    constructor(private game: GameService, private cookies: CookieService) {
        this.game.getTables().subscribe(tables => {
            console.log('tables', tables);
            console.log('table', tables[0].payload.val());
            this.tableKey = tables[0].payload.key;
            this.table = tables[0].payload.val();
            // this.table.doors.forEach(x => x.owner = null);
            // this.game.updateTable(this.tableKey, this.table);
            if (this.cookies.check('mun-player-id-test')) {
                const pid = this.cookies.get('mun-player-id-test');
                this.player = this.table.players.find(p => p.id === pid);
            }
        });
    }

    ngOnInit() {}

    enemies() {
        return this.table.players.filter(p => p.id !== this.player.id);
    }

    getCards() {
        let doors = !this.table.doors
            ? []
            : this.table.doors.filter(card => card.owner === this.player.id);
        let treasures = !this.table.treasures
            ? []
            : this.table.treasures.filter(
                  card => card.owner === this.player.id,
              );
        console.log('tablblblb', doors.concat(treasures));
        return doors.concat(treasures);
    }

    addNewTable() {
        this.game.addTable();
    }

    register(player: Player) {
        this.player = player;
        this.cookies.set('mun-player-id-test', player.id);
    }

    cookiesAreSet() {
        return this.cookies.check('mun-player-id-test');
    }

    onCardOpen(eventCard: Card) {
        GameData.doAction("discard", eventCard, this.player, null);
        this.game.updateTable(this.tableKey, this.table);
    }

    onCardDetailsAction(eventAction: string) {
        // this.game.doAction(this.currentPlayerName, this.selectedCard.id, eventAction);
        // this.selectedCard = null;
    }

    yourTurn() {
        return this.player.id === this.table.currentTurn;
    }

    openTheDoor() {
        if (this.table.doors.length) {
            let card = this.table.doors.find(c => !c.owner);
            card.owner = this.player.id;
            card.currentSlot = CardSlot.inHand;
        }
        this.changeTheTurn();
    }

    doors() {
        return this.table.doors.filter(c => !c.owner);
    }

    changeTheTurn() {
        let prevIndex = this.table.players.findIndex(
            p => p.id === this.table.currentTurn,
        );
        const newIndex = ++prevIndex % this.table.players.length;
        this.table.currentTurn = this.table.players[newIndex].id;
        this.game.updateTable(this.tableKey, this.table);
    }
}
