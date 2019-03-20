import { Card, CardSlot, Race, Class } from '../Card';

export class ClassSuperMunchkin1 extends Card {
    id: string = `class_supermunchkin_1`;
    cardName: string = `Класс "СуперМанчкин"`;
    isDoor: boolean = true;
    isBigItem: boolean = false;
    raceCard?: Race = null;
    classCard?: Class = Class.supermunchkin;
    requiredRace?: Race = null;
    requiredClass?: Class = null;
    requiredSlot?: CardSlot = CardSlot.classes;
}
