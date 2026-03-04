import { ICommand } from './ICommand';

export class CalcCommand implements ICommand {
    public readonly name = 'calc';
    public readonly description = 'Performs basic math operations.';

    public execute(args: string[]): void {
        if (args.length < 3) {
            console.log("Please provide an expression. Usage: calc <a> <operator> <b>");
            console.log("Supported operators: +, -, *, /");
            return;
        }

        const a = parseFloat(args[0]);
        const operator = args[1];
        const b = parseFloat(args[2]);

        if (isNaN(a) || isNaN(b)) {
            console.log("Invalid numbers provided.");
            return;
        }

        let result: number;
        switch (operator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            case 'x': result = a * b; break;
            default:
                console.log(`Unknown operator: ${operator}`);
                return;
        }

        console.log(`${a} ${operator} ${b} = ${result}`);
    }
}
