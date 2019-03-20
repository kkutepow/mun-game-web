import { Card, CardSlot, Race, Class } from '../Card';

export class ClassWarrior1 extends Card {
    id: string = `class_warrior_1`;
    cardName: string = `Класс "Воин"`;
    isDoor: boolean = true;
    isBigItem: boolean = false;
    raceCard?: Race = null;
    classCard?: Class = Class.warrior;
    requiredRace?: Race = null;
    requiredClass?: Class = null;
    requiredSlot?: CardSlot = CardSlot.classes;
}