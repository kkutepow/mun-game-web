import { Card } from '../models/Card';
import { Table } from '../models/Table';

export class DoorsDeck {
    public deck: Card[] = [
        {
            cardName: 'Монстр Дракон',
            key: 'monster_draco',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
        {
            cardName: 'Проклятье Сними Головняк',
            key: 'curse_discard_head',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
        {
            cardName: 'Проклятье Потеряй Уровень',
            key: 'curse_decrease_level',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
            actions: {
                playWithSelf: (gameContext: Table) => {},
                playWithMonster: (gameContext: Table, cardId: string) => {},
                playWithPlayer: (gameContext: Table, playerId: string) => {
                    gameContext.players = gameContext.players.map(player => {
                        if (player.name === playerId) {
                            --player.level;
                        }
                        return player;
                    });
                    return;
                },
                playWithAllPlayers: (gameContext: Table) => {},
            },
        } as Card,
        {
            cardName: 'Проклятье Сними Головняк',
            key: 'curse_discard_head',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
        {
            cardName: 'Проклятье Сними Головняк',
            key: 'curse_discard_head',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
        {
            cardName: 'Проклятье Сними Головняк',
            key: 'curse_discard_head',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
        {
            cardName: 'Проклятье Сними Головняк',
            key: 'curse_discard_head',
            isDoor: true,
            isEquipment: false,
            availableActions: [],
        } as Card,
    ];
}
