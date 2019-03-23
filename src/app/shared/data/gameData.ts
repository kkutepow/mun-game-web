import { Card } from '../models/Card';
import { ClassCleric1 } from '../models/cards/class_cleric.card';
import { ClassSuperMunchkin1 } from '../models/cards/class_supermunchkin.card';
import { ClassWarrior1 } from '../models/cards/class_warrior.card';
import { CurseLoseABigItem } from '../models/cards/curse_lose_a_big_item.card';
import { CurseLoseALevel } from '../models/cards/curse_lose_a_level.card';
import { Player } from '../models/Player';
import { DiscardAction } from '../models/actions/discard.action';

export class GameData {
    static actions : any = {
        "DiscardAction" : DiscardAction
    }

    constructor () {
        console.log('yogame data');
    }

    static getAllDoors(): any {
        return Object.values(this.deck)
            .map(x => x.card)
            .filter(c => c.isDoor);
    }

    static getAllTreasures(): any {
        return Object.values(this.deck)
            .map(x => x.card)
            .filter(c => !c.isDoor);
    }

    static getCard(cardId: string): Card {
        return this.deck[cardId].card;
    }

    static getCardIds() {
        return Object.keys(this.deck);
    }

    static getAvailableActions(card: Card, player: Player, target: Player) {
        let actions = Object.keys(this.deck[card.id].actions);
        return actions.filter(action => window[action](card, player, target).validate());
    }

    static doAction(actionName: string, card: Card, player: Player, target: Player) {
        let action = this.deck[card.id].actions[actionName];
        return (new this.actions[action](card, player, target)).execute();
    }

    static deck: { [cardId: string]: { card: Card; actions: { [action: string]: string } } } = {
        class_cleric_1: {
            card: new ClassCleric1(),
            actions: {
                discard: 'DiscardAction',
            },
        },
        class_supermunchkin_1: {
            card: new ClassSuperMunchkin1(),
            actions: {
                discard: 'DiscardAction',
            },
        },
        class_warrior_1: {
            card: new ClassWarrior1(),
            actions: {
                discard: 'DiscardAction',
            },
        },
        curse_lose_a_level: {
            card: new CurseLoseALevel(),
            actions: {
                discard: 'DiscardAction',
            },
        },
        curse_lose_a_big_item: {
            card: new CurseLoseABigItem(),
            actions: {
                discard: 'DiscardAction',
            },
        },
    };
}
