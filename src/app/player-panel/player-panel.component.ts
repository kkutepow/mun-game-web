import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../shared/models/Player';
import { Card, CardSlot } from '../shared/models/Card';

@Component({
    selector: 'app-player-panel',
    templateUrl: './player-panel.component.html',
    styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent implements OnInit {
    @Input() player: Player;
    @Output() cardOpen: EventEmitter<Card> = new EventEmitter();

    constructor() {}

    ngOnInit() {
        // console.info('player-panel fetched');
    }

    getHands() {
        const cardsOrder = [
            { name: 'In-Hand', cards: this.player.cards[CardSlot.inHand], isHiddenStack: true },
            { name: 'Reserve', cards: this.player.cards[CardSlot.inGame] },
        ];
        // console.log("getHands :", cardsOrder);
        return cardsOrder;
    }

    getEquip() {
        const cardsOrder = [
            { name: 'Head', cards: this.player.cards[CardSlot.head] },
            { name: 'Body', cards: this.player.cards[CardSlot.body] },
            { name: 'Legs', cards: this.player.cards[CardSlot.legs] },
            { name: 'Other', cards: this.player.cards[CardSlot.other] },
        ];
        // console.log("getEquip :", cardsOrder);
        return cardsOrder;
    }

    getCurses() {
        const cardsOrder = [{ name: 'Curses', cards: this.player.cards[CardSlot.curses] }];
        // console.log("getCurses :", cardsOrder);
        return cardsOrder;
    }

    onCardOpen(evt) {
        this.cardOpen.emit(evt);
    }
}
