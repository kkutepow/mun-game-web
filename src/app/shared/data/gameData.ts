import { Card } from '../models/Card';
import { ClassCleric1 } from '../models/cards/class_cleric.card';
import { ClassSuperMunchkin1 } from '../models/cards/class_supermunchkin.card';
import { ClassWarrior1 } from '../models/cards/class_warrior.card';
import { CurseLoseABigItem } from '../models/cards/curse_lose_a_big_item.card';
import { CurseLoseALevel } from '../models/cards/curse_lose_a_level.card';
import { Player } from '../models/Player';
import { DiscardAction } from '../models/actions/discard.action';
import { PutInGameAction } from '../models/actions/putInGame.action';
import { IncreaseLevelSelfAction } from '../models/actions/increaseLevelSelf.action';
import { SendToPlayerAction } from '../models/actions/sendToPlayer.action';
import { AddRaceAction } from '../models/actions/addRace.action';
import { AddClassAction } from '../models/actions/addClass.action';
import { EquipAction } from '../models/actions/equip.action';
import { Table } from '../models/Table';

export class GameData {
    static actions: any = {
        AddRaceAction: AddRaceAction,
        AddClassAction: AddClassAction,
        DiscardAction: DiscardAction,
        EquipAction: EquipAction,
        IncreaseLevelSelfAction: IncreaseLevelSelfAction,
        PutInGameAction: PutInGameAction,
        SendToPlayerAction: SendToPlayerAction,
    };

    constructor() {
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
    
    static getPlayerCards(context: Table, player: Player): any {
        let doors = !context.doors ? [] : context.doors.filter(c => c.owner === player.id)
        let treasures = !context.treasures ? [] : context.treasures.filter(c => c.owner === player.id)
        return doors.concat(treasures);
    }

    static getAvailableActions(context: Table, card: Card, player: Player, target: Player) {
        let actions = Object.keys(this.deck[card.id].actions);
        return actions.filter(actionName => {
            let action = this.deck[card.id].actions[actionName];
            let cardAction = new this.actions[action](context, card, player, target);
            let available = cardAction.validate();
            if (!available) {
                console.log("Error: ", actionName, action, cardAction.lastError);
            }
            return available;
        });
    }

    static doAction(actionName: string, context: Table, card: Card, player: Player, target: Player) {
        let action = this.deck[card.id].actions[actionName];
        return new this.actions[action](context, card, player, target).execute();
    }

    static deck: { [cardId: string]: { card: Card; actions: { [action: string]: string } } } = {
        class_cleric_1: {
            card: new ClassCleric1(),
            actions: {
                discard: 'DiscardAction',
                equip: 'AddClassAction',
            },
        },
        class_supermunchkin_1: {
            card: new ClassSuperMunchkin1(),
            actions: {
                discard: 'DiscardAction',
                equip: 'AddClassAction',
            },
        },
        class_warrior_1: {
            card: new ClassWarrior1(),
            actions: {
                discard: 'DiscardAction',
                equip: 'AddClassAction',
            },
        },
        curse_lose_a_level: {
            card: new CurseLoseALevel(),
            actions: {
                discard: 'DiscardAction',
                // playWithSelf: 'DecreaseLevelAction',
            },
        },
        curse_lose_a_big_item: {
            card: new CurseLoseABigItem(),
            actions: {
                discard: 'DiscardAction',
                // playWithSelf: 'LoseBigItemAction',
            },
        },
    };
}
