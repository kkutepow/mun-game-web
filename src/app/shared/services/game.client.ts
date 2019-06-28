import { GameContract } from '../contracts/game.contract';
import { GameContext } from '../contexts/game.context';
import { EventEmitter } from '@angular/core';
import { CommandOptions } from '../commands/command.options';
import { Command as Commands } from '../enums/enums';

export class GameClient {
    contract: GameContract;
    context: GameContext;

    public onContractChanged = new EventEmitter<GameContract>();
    public onClientContextChanged = new EventEmitter<GameContext>();

    constructor (gameContract: GameContract) {
        this.contract = gameContract;
    }

    async doCommand(command: Commands, args: CommandOptions) {
        const result = await Command.do(command, args, this.contract, this.context);

    }

    doQuery() {
        
    }
}

export class Command {
    static do(command: Commands, args: CommandOptions, contract: GameContract, context: GameContext) {
        throw new Error("Method not implemented.");
    }    
}