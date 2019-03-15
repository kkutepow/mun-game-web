import { Component } from '@angular/core';
import { GameService } from './shared/services/game.service';

import { CookieService } from 'ngx-cookie-service';
import { Card } from './shared/models/Card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent {
    title = 'munchkin-game';
    enemies = [];
    books = [];
    currentPlayerName = null;
    name = null;
    selectedCard: Card;

    constructor(private game: GameService, private cookies: CookieService) {}

    ngOnInit() {
        this.game.getPlayers().subscribe(data => {
            this.currentPlayerName = this.cookies.get('mun-player-name-test');
            this.enemies = Array.isArray(data) && data[0].players;
        });
    }

    register() {
        if (!this.name) {
            // console.log('should be non-empty');
            return;
        }

        this.cookies.set('mun-player-name-test', this.name);
        this.game.addPlayer(this.name);
        this.currentPlayerName = this.name;
    }

    cookiesAreSet() {
        return this.cookies.check('mun-player-name-test');
    }

    onCardOpen(eventCard: Card) {
        this.selectedCard = eventCard;
    }

    onCardDetailsAction(eventAction: string) {
        this.game.doAction(this.currentPlayerName, this.selectedCard.id, eventAction);
        this.selectedCard = null;
    }
}
