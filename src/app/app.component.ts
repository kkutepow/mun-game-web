import { Component } from '@angular/core';
import { GameService } from './shared/services/game.service';

import { CookieService } from 'ngx-cookie-service';

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
    currentActions: { actions: any; playerId: any; cardId: any };

    constructor(private game: GameService, private cookies: CookieService) {}

    ngOnInit() {
        this.game.getPlayers().subscribe(data => {
            this.currentPlayerName = this.cookies.get('mun-player-name-test');
            this.enemies = Array.isArray(data) && data[0].players;
        });
    }

    register() {
        if (!this.name) {
            console.log('should be non-empty');
        }

        this.cookies.set('mun-player-name-test', this.name);
        this.game.addPlayer(this.name);
        this.currentPlayerName = this.name;
    }

    cookiesAreSet() {
        return this.cookies.check('mun-player-name-test');
    }

    showActions(actions, playerId, cardId) {
        this.currentActions = {
            actions: actions,
            playerId: playerId,
            cardId: cardId,
        };
    }

    doAction(action) {
        this.game.doAction(this.currentActions.playerId, this.currentActions.cardId, action);
        this.hideActions();
    }

    hideActions() {
        this.currentActions = null;
    }

    preventClick() {}
}
