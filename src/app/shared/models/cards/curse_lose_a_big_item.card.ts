import { Card, CardSlot, Race, Class } from '../Card';

export class CurseLoseABigItem extends Card {
    id: string = `curse_lose_a_big_item`;
    cardName: string = `Проклятье "Потеряй большую шмотку"`;
    isDoor: boolean = true;
    isBigItem: boolean = false;
    raceCard?: Race = null;
    classCard?: Class = null;
    requiredRace?: Race = null;
    requiredClass?: Class = null;
    requiredSlot?: CardSlot = null;

    // actions = {
    //     playWithAll: this.noneFn,
    //     playWithCard: this.noneFn,

    //     equip: this.noneFn,
    //     discard: this.discardFn,
    //     putInGame: this.putCardInGameFn,
    //     sendToPlayer: this.sendToPlayerFn,

    //     playWithSelf: (table: Table, pid: string, testPermissionMode: boolean) => {
    //         const actionFn = () => {
    //             let player = table.getPlayer(pid);
    //             let cardsToRequest = player.cards[CardSlot.body].filter(x => x.isBigItem);
    //             table.doRequest(pid, cardsToRequest, 1).then(selectedCards => {
    //                 selectedCards.forEach((card: Card) => {
    //                     card.actions.discard(table, pid, false);
    //                 });

    //                 this.actions.discard(table, pid, false);

    //                 //update the table
    //                 table.setPlayer(pid, player);
    //             });
    //         };
    //         return this.doBasicValidation(table, pid, testPermissionMode, actionFn);
    //     },
    //     playWithPlayer: (table: Table, pid: string, targetPid: string, testPermissionMode: boolean) => {
    //         const actionFn = () => {
    //             let player = table.getPlayer(pid);
    //             let targetPlayer = table.getPlayer(targetPid);
    //             let cardsToRequest = targetPlayer.cards[CardSlot.body].filter(x => x.isBigItem);
                
    //             table.doRequest(targetPid, cardsToRequest, 1).then(selectedCards => {
    //                 selectedCards.forEach((card: Card) => {
    //                     card.actions.discard(table, targetPid, false);
    //                 });

    //                 this.actions.discard(table, pid, false);

    //                 //update the table
    //                 table.setPlayer(pid, player);
    //                 table.setPlayer(targetPid, targetPlayer);
    //             });
    //         };
    //         return this.doBasicValidation(table, pid, testPermissionMode, actionFn);
    //     },
    // } as BasicCardAction;
}
