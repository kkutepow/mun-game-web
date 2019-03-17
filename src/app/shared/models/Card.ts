import { Player } from './Player';
import { Table } from './Table';

export class Card {
    id: string;
    isDoor: boolean;
    isEquipment: boolean;
    cardName: string;
    availableActions: string[];
    actions: { 
        discard : (table: Table) => void;
        playWithAll : (table: Table) => void;
        playWithSelf : (table: Table) => void,
        sendToPlayer : (table: Table, pid: string) => void;
        playWithPlayer : (table: Table, pid: string) => void;
        playWithMonster : (table: Table, cid: string) => void;
    };
    owner?: Player;
}
