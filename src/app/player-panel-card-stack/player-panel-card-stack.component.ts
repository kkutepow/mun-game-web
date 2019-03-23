import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../shared/models/Card';

@Component({
    selector: 'app-player-panel-card-stack',
    templateUrl: './player-panel-card-stack.component.html',
    styleUrls: ['./player-panel-card-stack.component.scss'],
})
export class PlayerPanelCardStackComponent implements OnInit {
    @Input() cards: Card[] = [];
    @Input() isHiddenStack: boolean = false;
    @Input() name: string = '';

    @Output() cardOpen: EventEmitter<Card> = new EventEmitter();

    constructor() {}

    ngOnInit() {
        console.info('player-panel-card-stack fetched', this.cards);
    }

    onCardOpen(evt) {
        this.cardOpen.emit(evt);
    }
}
