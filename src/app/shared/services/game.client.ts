import { GameContract, PlayerContract, CardContract } from '../contracts/game.contract';
import { GameContext, PlayerContext, CardContext } from '../contexts/game.context';
import { EventEmitter } from '@angular/core';
import { CommandOptions } from '../commands/command.options';
import { Commands } from '../enums/enums';
import { Command } from '../commands/command';

export class GameClient {
    contract: GameContract;
    context: GameContext;

    public onContractChanged = new EventEmitter<GameContract>();
    public onClientContextChanged = new EventEmitter<GameContext>();

    constructor(gameContract: GameContract) {
        this.contract = gameContract;
        this.context = {
            player: this.currentPlayer,
            opponents: this.opponents,
        };
    }

    doCommand(command: Commands, args: CommandOptions) {
        const result = Command.do(command, args, this.contract, this.context);

        // Command result can be logged here

        if (!result.errors) {
            this.onClientContextChanged.emit(this.context);
            this.onContractChanged.emit(this.contract);
        }
    }

    doQuery() {}

    get currentPlayer(): PlayerContext {
        const currentPlayer = this.contract.players[0];
        return this.getPlayerContext(currentPlayer);
    }

    get opponents(): PlayerContext[] {
        const oppos = this.contract.players.slice(1);
        return oppos.map(p => this.getPlayerContext(p));
    }

    getPlayerContext(playerContract: PlayerContract): PlayerContext {
        return {
            id: playerContract.id,
            level: playerContract.level,
            name: playerContract.name,
            cards: this.contract.cards
                .filter(card => card.owner === playerContract.id)
                .map(card => ({ currentSlot: card.currentSlot } as CardContext)),
        } as PlayerContext;
    }

    getCardContext(cardContract: CardContract): CardContext {
        return {
            currentSlot: cardContract.currentSlot,
            backUrl: 'assets/card_images/back.jpg',
            faceUrl: 'assets/card_images/face.jpg',
        } as CardContext;
    }
}
