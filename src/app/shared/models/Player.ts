import { Card, CardSlot, Class, Race } from './Card';

export class Player {
    id: string;
    name: string;
    level: number;
    gender: 'm' | 'f';

    // decks
    cards: { [slot: string]: Card[] } = {};


    static hasClass(player: Player, _class: Class): boolean {
        return !!(player.cards && player.cards[CardSlot.classes].find((card: Card) => card.classCard === _class));
    }

    static hasRace(player: Player, race: Race): boolean {
        return !!(player.cards && player.cards[CardSlot.races].find((card: Card) => card.raceCard === race));
    }

    static decreaseLevel(player: Player, count: number) {
        player.level = Math.max(1, player.level - count);
    }

    static increaseLevel(player: Player, count: number) {
        player.level = Math.min(10, player.level + count);
    }
}
