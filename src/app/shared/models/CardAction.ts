import { Card } from './Card';
import { Player } from './Player';
import { Table } from './Table';

export abstract class BasicCardAction {
    //Playing card
    protected card: Card;
    //The game context
    protected context: Table;
    //Initiator of card play
    protected player: Player;
    //Optional target for card play
    protected target: Player;

    //contains the last error message occurs during last execution
    public lastError: string;

    //initialize of new action within required subjectives
    constructor(context: Table, card: Card, player: Player, target?: Player) {
        this.card = card;
        this.context = context;
        this.player = player;
        this.target = target;
    }

    // contains
    abstract validations: ((context: Table, card: Card, player: Player, target: Player) => void)[];
    abstract action: () => void;

    // wrapper method to do validation
    validate() {
        try {
            this.validations.forEach(validation => validation(this.context, this.card, this.player, this.target));
            return true;
        } catch (err) {
            this.lastError = err.message;
            return false;
        }
    }

    // wrapper method to do action
    execute() {
        if (this.validate()) {
            this.action();
        }
    }
}

export enum CardAction {
    playWithSelf,
    playWithCard,
    playWithPlayer,
    playWithAll,
    discard,
    equip,
    putInGame,
    sendToPlayer,
}
