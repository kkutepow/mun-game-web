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
    stealer,
}

export enum Gender {
    male,
    female,
}

export enum Race {
    none,
    halfblood,
    elf,
    dwarf,
    halfling,
    human,
}

export enum RoundPhase {
    DoorOpening,
    TakingDoor,
    Fighting,
    Escaping,
    TakingTreasures,
    SendingTreasures,
    NextDoorTaking,
    FightingPocket,
    EscapingPocket,
    TakingTreasuresPocket,
    SendingTreasuresPocket,
    SendingCards,
}

export enum Commands {
    GiveCard,
    DropCard,
    OpenDoor,
    RequestHelp,
}

export enum Query {
    
}
