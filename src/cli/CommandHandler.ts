import { ICommand } from '../commands/ICommand';

export class CommandHandler {
    private commands: Map<string, ICommand>;

    constructor() {
        this.commands = new Map();
    }

    public registerCommand(command: ICommand): void {
        this.commands.set(command.name, command);
    }

    public async handle(inputArgs: string[]): Promise<void> {
        if (inputArgs.length === 0) {
            console.log("Welcome to DevCLI!");
            this.showHelp();
            return;
        }

        const commandName = inputArgs[0];
        const commandArgs = inputArgs.slice(1);

        const command = this.commands.get(commandName);

        if (command) {
            try {
                await command.execute(commandArgs);
            } catch (error: any) {
                console.error(`Error executing command '${commandName}':`, error.message);
            }
        } else {
            console.log(`Unknown command: ${commandName}`);
            this.showHelp();
        }
    }

    public showHelp(): void {
        console.log("\nAvailable Commands:");
        for (const [name, command] of this.commands.entries()) {
            console.log(`  ${name.padEnd(15)} ${command.description}`);
        }
    }
}
