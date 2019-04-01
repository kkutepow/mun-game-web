import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../shared/models/Player';
import { Card, CardSlot } from '../shared/models/Card';
import { GameService } from '../shared/services/game.service';

@Component({
    selector: 'app-player-panel',
    templateUrl: './player-panel.component.html',
    styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent implements OnInit {
    @Input() player: Player;
    @Input() cards: Card[];
    @Output() cardOpen: EventEmitter<Card> = new EventEmitter();

    constructor(private game: GameService) {}

    ngOnInit() {
        // console.info('player-panel fetched');
    }

    getCardsInHand() {
        return this.cards.filter(card => card.currentSlot === CardSlot.inHand);
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

    getClasses() {
        return this.cards.filter(card => card.currentSlot === CardSlot.classes);
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
