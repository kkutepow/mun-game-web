export abstract class Card {
    //card face
    abstract id: string;
    abstract cardName: string;

    //card static options
    abstract isDoor: boolean;
    abstract isBigItem: boolean;
    
    //set if card has class/race meaning
    abstract raceCard?: Race;
    abstract classCard?: Class;

    //set if card has requirements for special slot/race/class
    abstract requiredRace?: Race;
    abstract requiredClass?: Class;
    abstract requiredSlot?: CardSlot;

    //card dynamic options
    owner: string;
    currentSlot: CardSlot;
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

export enum Class {
    none,
    supermunchkin,
    warrior,
    cleric,
    wizard,
    stealer
}

export enum Race {
    none,
    halfblood,
    elf,
    dwarf,
    halfling,
    human
}