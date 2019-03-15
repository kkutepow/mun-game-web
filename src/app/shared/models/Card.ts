import { Player } from './Player';

export class Card {
    id: string;
    isDoor: boolean;
    isEquipment: boolean;
    cardName: string;
    availableActions: string[];
    owner: Player;
}
