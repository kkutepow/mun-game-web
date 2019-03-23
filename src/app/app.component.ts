import { Component, OnInit } from '@angular/core';
import { GameService } from './shared/services/game.service';

import { CookieService } from 'ngx-cookie-service';
import { Card } from './shared/models/Card';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Player } from './shared/models/Player';
import { Table } from './shared/models/Table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    title = 'munchkin-game';
    books = [];
    currentPlayerName = null;
    name = null;
    selectedCard: Card;
    table: Table;
    player: Player;

    constructor(private game: GameService, private cookies: CookieService) {
        this.game.getTables().subscribe(tables => {
            console.log('tables', tables);
            this.table = tables[0];
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
        let doors = !this.table.doors ? [] : this.table.doors.filter(card => card.owner === this.player.id);
        let treasures = !this.table.treasures ? [] : this.table.treasures.filter(card => card.owner === this.player.id);
        console.log("tablblblb", doors.concat(treasures))
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
        this.selectedCard = eventCard;
    }

    onCardDetailsAction(eventAction: string) {
        // this.game.doAction(this.currentPlayerName, this.selectedCard.id, eventAction);
        // this.selectedCard = null;
    }

    yourTurn () {
        return this.player.id === this.table.currentTurn;
    }
}
