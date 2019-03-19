import { Table } from './Table';

export class CardAction {
    playWithSelf: (table: Table, pid: string, testPermissionMode: boolean) => string;
    playWithCard: (table: Table, pid: string, testPermissionMode: boolean) => string;
    playWithPlayer: (table: Table, pid: string, targetPid: string, testPermissionMode: boolean) => string;
    playWithAll: (table: Table, pid: string, testPermissionMode: boolean) => string;

    discard: (table: Table, pid: string, testPermissionMode: boolean) => string;
    equip: (table: Table, pid: string, testPermissionMode: boolean) => string;
    putInGame: (table: Table, pid: string, testPermissionMode: boolean) => string;
    sendToPlayer: (table: Table, pid: string, targetPid: string, testPermissionMode: boolean) => string;
}
