import { Card, CardSlot, Class, Race } from './Card';
import { Player } from './Player';
import { Table } from './Table';
import { GameData } from '../data/gameData';

export class CardActionValidator {
    static cardShouldHaveOwner(context: Table, card: Card, player: Player, target: Player): void {
        if (!card.owner) {
            throw new Error(`У карты нет владельца`);
        }
    }

    static cardShouldBeEquipment(context: Table, card: Card, player: Player, target: Player): void {
        if (!card.requiredSlot) {
            throw new Error(`Карта не может быть надета`);
        }
    }

    static cardShouldBeUsedOnlyByOwner(context: Table, card: Card, player: Player, target: Player): void {
        if (card.owner !== player.id) {
            throw new Error(`Карта не может быть использована вами`);
        }
    }

    static cardShouldHaveClassMeaning(context: Table, card: Card, player: Player, target: Player): void {
        if (!card.classCard) {
            throw new Error(`Карта не может быть использована как класс`);
        }
    }

    static cardShouldHaveRaceMeaning(context: Table, card: Card, player: Player, target: Player): void {
        if (!card.raceCard) {
            throw new Error(`Карта не может быть использована как раса`);
        }
    }

    static cardShouldBeCompatibleWithClass(context: Table, card: Card, player: Player, target: Player): void {
        if (card.requiredClass && !Player.hasClass(player, card.requiredClass)) {
            throw new Error(`Карта может быть использована только классом "${card.requiredClass}"`);
        }
    }

    static cardShouldBeCompatibleWithRace(context: Table, card: Card, player: Player, target: Player): void {
        if (card.requiredRace && !Player.hasRace(player, card.requiredRace)) {
            throw new Error(`Карта может быть использована только расой "${card.requiredRace}"`);
        }
    }

    static userShouldBeReadyForClass(context: Table, card: Card, player: Player, target: Player): void {
        let playerClasses =  GameData.getPlayerCards(context, player).filter(card => card.currentSlot === CardSlot.classes);
        if (playerClasses.some(c => c.classCard === card.classCard)) {
            throw new Error(`У вас уже есть этот класс`);
        }

        if (card.classCard === Class.supermunchkin) {
            return;
        }

        let classesLimit = playerClasses.some(c => c.classCard === Class.supermunchkin) ? 3 : 1;
        let classesCount = playerClasses.length;
        if (classesCount >= classesLimit) {
            throw new Error(`Вы не можете приобрести новый класс`);
        }
    }

    static userShouldBeReadyForRace(context: Table, card: Card, player: Player, target: Player): void {
        if (Player.hasRace(player, card.raceCard)) {
            throw new Error(`У вас уже есть эта раса`);
        }

        if (card.raceCard === Race.halfblood) {
            return;
        }

        let racesLimit = !Player.hasRace(player, Race.halfblood) ? 1 : 0;
        let racesCount = player.cards && player.cards[CardSlot.races].length;
        if (racesCount > racesLimit) {
            throw new Error(`Вы не можете приобрести новую расу`);
        }
    }

    static cardShouldBeInHandOrGame(context: Table, card: Card, player: Player, target: Player): void {
        let cardSlot = card.currentSlot;
        if (cardSlot !== CardSlot.inGame && cardSlot !== CardSlot.inHand) {
            throw new Error('Карта должна быть в руках или в игре');
        }
    }

    static cardShouldBeInHand(context: Table, card: Card, player: Player, target: Player): void {
        let cardSlot = card.currentSlot;
        if (cardSlot !== CardSlot.inHand) {
            throw new Error('Карта должна быть в руках');
        }
    }
}
