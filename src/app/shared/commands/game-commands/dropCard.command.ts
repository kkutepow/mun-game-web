import { CommandOptions } from '../command.options';
import { GameContract } from '../../contracts/game.contract';
import { GameContext } from '../../contexts/game.context';

export const DropCardCommand = (args: CommandOptions, contract: GameContract, context: GameContext) => {
    var errors = [];

    return { errors };
};