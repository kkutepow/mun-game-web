import { Card, CardSlot } from '../Card';
import { CardAction } from '../CardAction';
import { Table } from '../Table';

export class ClassSuperMunchkin1 extends Card {
    id = 'class_supermunchkin_1';
    forClass = null;
    forRace = null;
    owner = null;
    isDoor: true;
    isBigItem = false;
    forEquipmentSlot = CardSlot.classes;
    cardName: 'Класс: Суперманчкин';
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
