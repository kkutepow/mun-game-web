import { GameContract } from '../contracts/game.contract';
import { GameContext } from '../contexts/game.context';
import { EventEmitter } from '@angular/core';
import { CommandOptions } from '../commands/command.options';
import { Commands } from '../enums/enums';
import { GameCommands } from '../commands/commands';
import { CommandResult } from '../commands/command.result';

export class GameClient {
    contract: GameContract;
    context: GameContext;

    public onContractChanged = new EventEmitter<GameContract>();
    public onClientContextChanged = new EventEmitter<GameContext>();

    constructor(gameContract: GameContract) {
        this.contract = gameContract;
    }

    async doCommand(command: Commands, args: CommandOptions) {
        const result = Commands.do(command, args, this.contract, this.context);

        if (!result.errors) {
            this.onClientContextChanged.emit(this.context);
            this.onContractChanged.emit(this.contract);
        }
    }

    doQuery() {}
}

export class Command {
    static do(command: Commands, args: CommandOptions, contract: GameContract, context: GameContext): CommandResult {
        return GameCommands[command](args, contract, context);
    }
}
