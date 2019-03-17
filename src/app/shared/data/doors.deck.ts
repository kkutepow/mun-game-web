import { Card } from '../models/Card';
import { CurseLoseALevel } from '../models/cards/curse_lose_a_level';

export class DoorsDeck {
    public deck: Card[] = [
        new CurseLoseALevel(),
    ];
}
