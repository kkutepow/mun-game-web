import { Card } from '../models/Card';
import { CurseLoseALevel } from '../models/cards/curse_lose_a_level.card';
import { ClassCleric1 } from '../models/cards/class_cleric_1.card';
import { ClassSuperMunchkin1 } from '../models/cards/class_supermunchkin_1.card';
import { ClassWarrior1 } from '../models/cards/class_warrior_1.card';
import { CurseLoseABigItem } from '../models/cards/curse_lose_a_big_item.card';

export class DoorsDeck {
    public deck: Card[] = [
        new ClassCleric1(),
        new ClassSuperMunchkin1(),
        new ClassWarrior1(),
        new CurseLoseALevel(),
        new CurseLoseABigItem(),
    ];
}
