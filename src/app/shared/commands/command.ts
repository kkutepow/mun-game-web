export class Command {
    static do(command: Commands, args: CommandOptions, contract: GameContract, context: GameContext): CommandResult {
        return GameCommands[command](args, contract, context);
    }
}
