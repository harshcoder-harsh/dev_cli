import { ICommand } from './ICommand';

export class CalcCommand implements ICommand {
    public readonly name = 'calc';
    public readonly description = 'Adds two numbers.';

    public execute(args: string[]): void {
        if (args.length < 2) {
            console.log("Please provide two numbers. Usage: calc <a> <b>");
            return;
        }

        const a = parseFloat(args[0]);
        const b = parseFloat(args[1]);

        if (isNaN(a) || isNaN(b)) {
            console.log("Invalid numbers provided.");
            return;
        }

        console.log(`${a} + ${b} = ${a + b}`);
    }
}
