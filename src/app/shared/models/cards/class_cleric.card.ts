import { Card, CardSlot, Race, Class } from '../Card';

export class ClassCleric1 extends Card {
    id: string = `class_cleric_1`;
    cardName: string = `Класс "Клерик"`;
    isDoor: boolean = true;
    isBigItem: boolean = false;
    raceCard?: Race = null;
    classCard?: Class = Class.cleric;
    requiredRace?: Race = null;
    requiredClass?: Class = null;
    requiredSlot?: CardSlot = CardSlot.classes;
}