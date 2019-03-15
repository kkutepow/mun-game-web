import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../shared/models/Card';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('actions', [
            state(
                'open',
                style({
                    transform: 'scaleY(1)',
                    opacity: 1,
                }),
            ),
            state(
                'closed',
                style({
                    transform: 'scaleY(0)',
                    opacity: 0,
                }),
            ),
            transition('closed => open', [animate('0.5s')]),
            transition('closed => open', [animate('0.5s')]),
        ]),
    ],
})
export class CardComponent implements OnInit {
    @Input() card: Card;
    @Input() isHidden: boolean = false;
    @Input() isOpen: boolean = false;

    @Output() open: EventEmitter<Card> = new EventEmitter();

    constructor() {}

    ngOnInit() {
        // console.log('card fetched');
    }

    toggleActions() {
        this.open.emit(this.card);
    }
}
