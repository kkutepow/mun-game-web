import { Card } from '../Card';
import { CardAction } from '../CardAction';
import { Table } from '../Table';

export class CurseLoseALevel extends Card {
    id = 'curse_lose_a_level';
    forClass = null;
    forRace = null;
    owner = null;
    isDoor: true;
    isBigItem = false;
    forEquipmentSlot = null;
    cardName: 'Проклятье: Потеряй уровень';
    actions = {
        playWithAll: this.noneFn,
        playWithCard: this.noneFn,

        equip: this.noneFn,
        discard: this.discardFn,
        putInGame: this.putCardInGameFn,
        sendToPlayer: this.sendToPlayerFn,

        playWithSelf: (table: Table, pid: string, testPermissionMode: boolean) => {
            const actionFn = () => {
                let player = table.getPlayer(pid);
                player.decreaseLevel(1);

                this.actions.discard(table, pid, false);

                //update the table
                table.setPlayer(pid, player);
            };
            return this.doBasicValidation(table, pid, testPermissionMode, actionFn);
        },
        playWithPlayer: (table: Table, pid: string, targetPid: string, testPermissionMode: boolean) => {
            const actionFn = () => {
                let player = table.getPlayer(pid);
                let targetPlayer = table.getPlayer(targetPid);
                targetPlayer.decreaseLevel(1);

                this.actions.discard(table, pid, false);

                //update the table
                table.setPlayer(pid, player);
                table.setPlayer(targetPid, targetPlayer);
            };
            return this.doBasicValidation(table, pid, testPermissionMode, actionFn);
        },
    } as CardAction;
}
