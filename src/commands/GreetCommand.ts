import { ICommand } from './ICommand';

export class GreetCommand implements ICommand {
    public readonly name = 'greet';
    public readonly description = 'Greets the user.';

    public execute(args: string[]): void {
        if (args.length === 0) {
            console.log("Please provide a name. Usage: greet <name>");
            return;
        }
        const name = args.join(' ');
        console.log(`Hello ${name}!`);
    }
}
