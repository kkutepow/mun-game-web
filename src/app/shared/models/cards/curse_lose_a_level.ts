import { Card } from '../Card';
import { Table } from '../Table';

export class CurseLoseALevel implements Card {
    id = 'curse_lose_a_level';
    isDoor = true;
    isEquipment = false;
    cardName = 'Проклятье “Потеряй Уровень”';
    availableActions = ['sendToPlayer', 'Discard'];
    actions: any;
    owner?: import('../Player').Player;
}
/*

    cardName = 'Проклятье “Потеряй Уровень”';
    id = 'curse_lose_a_level';
    isDoor = true;
    isEquipment = false;
    availableActions = ['sendToPlayer', 'Discard'];
    actions = {
        playWithSelf: (gameContext: Table) => {
            gameContext.players = gameContext.players.map(player => {
                if (player.name === gameContext.currentTurn) {
                    --player.level;
                }
                return player;
            });
        },
        playWithPlayer: (gameContext: Table, playerId: string) => {
            gameContext.players = gameContext.players.map(player => {
                if (player.name === playerId) {
                    --player.level;
                }
                return player;
            });
        },
        playWithMonster: (gameContext: Table, cardId: string) => {},
        playWithAllPlayers: (gameContext: Table) => {},
    };

*/
