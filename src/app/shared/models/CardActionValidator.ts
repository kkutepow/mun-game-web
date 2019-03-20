import { Card, CardSlot, Class, Race } from './Card';
import { Player } from './Player';

export class CardActionValidator {
    static cardShouldHaveOwner(card: Card, player: Player, target: Player): void {
        if (!card.owner) {
            throw `У карты нет владельца`;
        }
    }

    static cardShouldBeEquipment(card: Card, player: Player, target: Player): void {
        if (!card.requiredSlot) {
            throw `Карта не может быть надета`;
        }
    }

    static cardShouldBeUsedOnlyByOwner(card: Card, player: Player, target: Player): void {
        if (card.owner !== player.id) {
            throw `Карта не может быть использована вами`;
        }
    }

    static cardShouldBeCompatibleWithClass(card: Card, player: Player, target: Player): void {
        if (card.requiredClass && !player.hasClass(card.requiredClass)) {
            throw `Карта может быть использована только классом "${card.requiredClass}"`;
        }
    }

    static userShouldBeReadyForClass(card: Card, player: Player, target: Player): void {
        if (player.hasClass(card.classCard)) {
            throw `У вас уже есть этот класс`;
        }

        if (card.classCard === Class.supermunchkin) {
            return;
        }

        let classesLimit = !player.hasClass(Class.supermunchkin) ? 1 : 0;
        let classesCount = player.cards[CardSlot.classes].length;
        if (classesCount > classesLimit) {
            throw `Вы не можете приобрести новый класс`;
        }
    }

    static userShouldBeReadyForRace(card: Card, player: Player, target: Player): void {
        if (player.hasRace(card.raceCard)) {
            throw `У вас уже есть эта раса`;
        }

        if (card.raceCard === Race.halfblood) {
            return;
        }

        let racesLimit = !player.hasRace(Race.halfblood) ? 1 : 0;
        let racesCount = player.cards[CardSlot.races].length;
        if (racesCount > racesLimit) {
            throw `Вы не можете приобрести новую расу`;
        }
    }

    static cardShouldBeInHandOrGame(card: Card, player: Player, target: Player): void {
        let cardSlot = player.findCardPlace(card);
        if (cardSlot !== CardSlot.inGame && cardSlot !== CardSlot.inHand) {
            throw 'Карта должна быть в руках или в игре';
        }
    }

    static cardNotInHand(card: Card, player: Player, target: Player): void {
        let cardSlot = player.findCardPlace(card);
        if (cardSlot !== CardSlot.inHand) {
            throw 'Карта должна быть в руках';
        }
    }
}
