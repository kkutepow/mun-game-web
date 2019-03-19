import { Player } from './Player';
import { CardAction } from './CardAction';
import { Table } from './Table';

export class Card {
    id: string;
    isDoor: boolean;
    forEquipmentSlot: CardSlot;
    forClass: null | 'warrior' | 'cleric' | 'robber' | 'wizard';
    forRace: null | 'elf' | 'dwarf' | 'human' | 'halfling';
    isBigItem: boolean;
    cardName: string;
    actions: CardAction;
    owner: string;

    public cardInStack(message: string = 'Unknown exception'): void {
        if (!this.owner) {
            throw message;
        }
    }

    public cardUnableToEquip(message: string = 'Unknown exception'): void {
        if (!this.forEquipmentSlot) {
            throw message;
        }
    }

    public cardIsNotYours(pid: string, message: string = 'Unknown exception'): void {
        if (this.owner !== pid) {
            throw message;
        }
    }

    public cardUnableToEquipForThisClass(table, pid, message: string = 'Unknown exception'): void {
        let player = table.getPlayer(pid);
        if (this.forClass && !player.hasClass(this.forClass)) {
            throw message;
        }
    }

    public cardUnableSetManyClasses(table, pid, message: string = 'Unknown exception'): void {
        let player = table.getPlayer(pid);
        let classesLimit = !player.hasClass('supermunchkin') ? 1 : 0;
        let classesCount = player.cards[CardSlot.classes].length;
        if (this.id.indexOf('class_supermunchkin') !== 0 && classesCount > classesLimit) {
            throw message;
        }
    }

    public cardUnableToEquipForThisRace(table, pid, message: string = 'Unknown exception'): void {
        let player = table.getPlayer(pid);
        if (this.forRace && !player.hasRace(this.forRace)) {
            throw message;
        }
    }

    public cardNotInGameOrHand(table: Table, pid: string, message: string = 'Unknown exception'): void {
        let player = table.getPlayer(pid);
        let cardSlot = player.findCardPlace(this);
        if (cardSlot !== CardSlot.inGame && cardSlot !== CardSlot.inHand) {
            throw message;
        }
    }

    public cardNotInHand(table: Table, pid: string, message: string = 'Unknown exception'): void {
        let player = table.getPlayer(pid);
        let cardSlot = player.findCardPlace(this);
        if (cardSlot !== CardSlot.inHand) {
            throw message;
        }
    }

    protected discardFn(table: Table, pid: string, testPermissionMode: boolean) {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardIsNotYours(pid, 'Это не ваша карта');

            //action
            if (!testPermissionMode) {
                let player = table.getPlayer(pid);
                
                this.owner = null;
                player.removeCard(this);
                table.setPlayer(pid, player);
            }
        } catch (err) {
            return err.message;
        }
    }

    protected equipCardFn(table: Table, pid: string, testPermissionMode: boolean) {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardUnableToEquip('Карта не может быть надета');
            this.cardIsNotYours(pid, 'Это не ваша карта');
            this.cardNotInGameOrHand(table, pid, 'Карта уже надета');
            this.cardUnableToEquipForThisClass(table, pid, 'Карта не может быть надета вашим классом');
            this.cardUnableToEquipForThisRace(table, pid, 'Карта не может быть надета вашей расой');

            //action
            if (!testPermissionMode) {
                let requiredSlot = this.forEquipmentSlot;
                let player = table.getPlayer(pid);
                //if slot is not empty
                if (requiredSlot !== CardSlot.other && !player.cards[requiredSlot]) {
                    //clear required equipment slot (if needed)
                    player.cards[requiredSlot].forEach((card: Card) => card.actions.discard(table, pid, false));
                }
                //drop this card from hand or in-game
                player.removeCard(this);
                //put this card to required slot
                player.putCardInSlot(this, requiredSlot);
                //update the table
                table.setPlayer(pid, player);
            }
        } catch (err) {
            return err.message;
        }
    }

    protected setClassFn(table: Table, pid: string, testPermissionMode: boolean) {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardIsNotYours(pid, 'Это не ваша карта');
            this.cardUnableSetManyClasses(table, pid, 'Нельзя применить несколько классов');
            this.cardNotInGameOrHand(table, pid, 'Карта уже применена');

            //action
            if (!testPermissionMode) {
                let player = table.getPlayer(pid);
                //drop this card from hand or in-game
                player.removeCard(this);
                //put this card to required slot
                player.putCardInSlot(this, CardSlot.classes);
                //update the table
                table.setPlayer(pid, player);
            }
        } catch (err) {
            return err.message;
        }
    }

    protected putCardInGameFn(table: Table, pid: string, testPermissionMode: boolean) {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardIsNotYours(pid, 'Это не ваша карта');
            this.cardNotInHand(table, pid, 'Карта должна быть в руке');

            //action
            if (!testPermissionMode) {
                let player = table.getPlayer(pid);
                //drop this card from hand
                player.removeCard(this, [CardSlot.inHand]);
                //put this card to in-game
                player.putCardInSlot(this, CardSlot.inGame);
                //update the table
                table.setPlayer(pid, player);
            }
        } catch (err) {
            return err.message;
        }
    }

    protected noneFn(table: Table, pid: string, testPermissionMode: boolean) {
        return 'Действие не возможно';
    }

    protected noneWithTargetFn(table: Table, pid: string, targetPid: string, testPermissionMode: boolean) {
        return 'Действие не возможно';
    }

    protected sendToPlayerFn(table: Table, pid: string, targetPid: string, testPermissionMode: boolean) {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardIsNotYours(pid, 'Это не ваша карта');

            //action
            if (!testPermissionMode) {
                let player = table.getPlayer(pid);
                let targetPlayer = table.getPlayer(targetPid);
                //drop this card from current player
                player.removeCard(this);
                //put this card into target player's hand
                this.owner = targetPlayer.id;
                targetPlayer.putCardInSlot(this, CardSlot.inHand);
                //update the table
                table.setPlayer(pid, player);
                table.setPlayer(targetPid, targetPlayer);
            }
        } catch (err) {
            return err.message;
        }
    }

    protected doBasicValidation(table: Table, pid: string, testPermissionMode: boolean, callback: () => void): string {
        try {
            //validation
            this.cardInStack('Карта в сбросе');
            this.cardIsNotYours(pid, 'Это не ваша карта');

            //action
            if (!testPermissionMode) {
                callback();
            }
        } catch (err) {
            return err.message;
        }
    }
}

export enum CardSlot {
    classes,
    races,
    curses,
    inGame,
    inHand,
    head,
    body,
    legs,
    other,
    cheat,
    slave,
}