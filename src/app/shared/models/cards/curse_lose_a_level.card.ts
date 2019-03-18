import { Card } from '../Card';
import { CardAction } from '../CardAction';
import { Table } from '../Table';

export class CurseLoseALevel extends Card {
    forClass: 'warrior' | 'cleric' | 'robber' | 'wizard' = null;
    forRace: 'elf' | 'dwarf' | 'human' | 'halfling' = null;
    id: 'curse_lose_a_level';
    owner = null;
    isDoor: false;
    isBigEquip = false;
    forEquipmentSlot = null;
    cardName: 'Потеряй уровень';
    actions = {
        playWithSelf: (table: Table, pid: string, testPermissionMode: boolean) => {
            return 'Действие не возможно';
        },
        playWithCard: (table: Table, pid: string, testPermissionMode: boolean) => {
            return 'Действие не возможно';
        },
        playWithPlayer: (table: Table, pid: string, testPermissionMode: boolean) => {
            return 'Действие не возможно';
        },
        playWithAll: (table: Table, pid: string, testPermissionMode: boolean) => {
            return 'Действие не возможно';
        },

        discard: this.discardFn,
        equip: this.equipCardFn,
        putInGame: this.putCardInGameFn,
        sendToPlayer: this.sendToPlayerFn,
    } as CardAction;
}
