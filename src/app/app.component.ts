import { Component, OnInit } from '@angular/core';
import { GameService } from './shared/services/game.service';

import { CookieService } from 'ngx-cookie-service';
import { Card } from './shared/models/Card';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    title = 'munchkin-game';
    enemies = [];
    books = [];
    currentPlayerName = null;
    name = null;
    selectedCard: Card;
    tables: Observable<any[]>;

    constructor(private game: GameService, private cookies: CookieService) {
        console.log('yo', this.tables);
        this.game.getTables().subscribe(tables => {
            console.log('tables', tables);
            this.tables = tables;
        });
        console.log('yo1', this.tables);
    }

    ngOnInit() {}

    get table() {
        return this.tables[0].value;
    }

    get tableKey() {
        return this.tables[0].key;
    }

    addNewTable() {
        this.game.addTable();
    }

    register() {
        if (!this.name) {
            // console.log('should be non-empty');
            return;
        }

        this.cookies.set('mun-player-name-test', this.name);
        this.game.addTable(this.name);
        this.currentPlayerName = this.name;
    }

    cookiesAreSet() {
        return this.cookies.check('mun-player-test1');
    }

    onCardOpen(eventCard: Card) {
        this.selectedCard = eventCard;
    }

    onCardDetailsAction(eventAction: string) {
        // this.game.doAction(this.currentPlayerName, this.selectedCard.id, eventAction);
        // this.selectedCard = null;
    }
}
