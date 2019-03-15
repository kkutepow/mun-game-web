import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../shared/models/Card';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
    @Input() card: Card;

    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() action: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    doAction(action) {
        this.action.emit(action);
    }

    hide() {
        this.close.emit(true);
    }
}
