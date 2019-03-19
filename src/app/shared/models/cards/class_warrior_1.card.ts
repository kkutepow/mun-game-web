import { Card, CardSlot } from '../Card';
import { CardAction } from '../CardAction';

export class ClassWarrior1 extends Card {
    id = 'class_warrior_1';
    forClass = null;
    forRace = null;
    owner = null;
    isDoor: true;
    isBigItem = false;
    forEquipmentSlot = CardSlot.classes;
    cardName: 'Класс: Воин';
    actions = {
        playWithAll: this.noneFn,
        playWithCard: this.noneFn,

        equip: this.setClassFn,
        discard: this.discardFn,
        putInGame: this.putCardInGameFn,
        sendToPlayer: this.sendToPlayerFn,

        playWithSelf: this.noneFn,
        playWithPlayer: this.noneWithTargetFn,
    } as CardAction;
}
