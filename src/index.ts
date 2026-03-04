import { CommandHandler } from './cli/CommandHandler';
import { GreetCommand } from './commands/GreetCommand';
import { GithubCommand } from './commands/GithubCommand';
import { WeatherCommand } from './commands/WeatherCommand';
import { QuoteCommand } from './commands/QuoteCommand';
import { JokeCommand } from './commands/JokeCommand';
import { FileInfoCommand } from './commands/FileInfoCommand';
import { DateCommand } from './commands/DateCommand';
import { RandomCommand } from './commands/RandomCommand';
import { CalcCommand } from './commands/CalcCommand';
import { SystemCommand } from './commands/SystemCommand';

async function main() {
    const commandHandler = new CommandHandler();

    commandHandler.registerCommand(new GreetCommand());
    commandHandler.registerCommand(new GithubCommand());
    commandHandler.registerCommand(new WeatherCommand());
    commandHandler.registerCommand(new QuoteCommand());
    commandHandler.registerCommand(new JokeCommand());
    commandHandler.registerCommand(new FileInfoCommand());
    commandHandler.registerCommand(new DateCommand());
    commandHandler.registerCommand(new RandomCommand());
    commandHandler.registerCommand(new CalcCommand());
    commandHandler.registerCommand(new SystemCommand());

    const args = process.argv.slice(2);

    await commandHandler.handle(args);
}

main().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
