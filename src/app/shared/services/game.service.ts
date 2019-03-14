import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    ref = null;
    constructor(private db: AngularFireDatabase) {
        console.log('here:');
        // this.db.list('/tables').push(this.table);
    }

    ngOnInit() {}

    getPlayers(): Observable<any> {
        return this.db.list('/tables').valueChanges();
    }

    addPlayer(data): void {
        // this.db.list('/tables').push(this.table);
    }

    doAction(playerId: any, cardId: any, action: any): any {
        console.log(`try to do ${action} with ${cardId} by ${playerId}`);
    }
}
