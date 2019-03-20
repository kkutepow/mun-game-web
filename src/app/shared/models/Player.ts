import { Card, CardSlot, Class, Race } from './Card';

export class Player {
    id: string;
    name: string;
    level: number;
    gender: 'm' | 'f';

    // decks
    cards: { [slot: string]: Card[] };

    public findCardPlace(card: Card): CardSlot {
        let places = [
            CardSlot.classes,
            CardSlot.races,
            CardSlot.inGame,
            CardSlot.inHand,
            CardSlot.curses,
            CardSlot.head,
            CardSlot.body,
            CardSlot.legs,
            CardSlot.cheat,
            CardSlot.slave,
            CardSlot.other,
        ];
        return places.reduce((prev, curr) => prev || this[CardSlot[curr]].some((c: Card) => c.id === card.id), null);
    }

    public findCardIndex(card: Card, slot: CardSlot): number {
        return this.cards[slot].findIndex((c: Card) => c.id === card.id);
    }

    public hasClass(_class: Class): boolean {
        return !!this.cards[CardSlot.classes].find((card: Card) => card.classCard === _class);
    }

    public hasRace(race: Race): boolean {
        return !!this.cards[CardSlot.races].find((card: Card) => card.raceCard === race);
    }

    putCardInSlot(card: Card, slot: CardSlot): void {
        this.cards[slot].push(card);
    }

    removeCard(card: Card, slots?: CardSlot[]): void {
        if (!slots) {
            slots = [
                CardSlot.classes,
                CardSlot.races,
                CardSlot.inGame,
                CardSlot.inHand,
                CardSlot.curses,
                CardSlot.head,
                CardSlot.body,
                CardSlot.legs,
                CardSlot.cheat,
                CardSlot.slave,
                CardSlot.other,
            ];
        }
        slots.forEach(slot => {
            this.cards[slot] = this.cards[slot].filter(c => c.id !== card.id);
        });
    }

    decreaseLevel(count: number) {
        this.level = Math.max(1, this.level - count);
    }

    increaseLevel(count: number) {
        this.level = Math.min(10, this.level + count);
    }
}
