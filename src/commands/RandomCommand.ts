import { ICommand } from './ICommand';

export class RandomCommand implements ICommand {
    public readonly name = 'random';
    public readonly description = 'Generates a random number.';

    public execute(args: string[]): void {
        let max = 100;
        if (args.length > 0) {
            const customMax = parseInt(args[0], 10);
            if (!isNaN(customMax)) {
                max = customMax;
            }
        }
        const num = Math.floor(Math.random() * max) + 1;
        console.log(`Random number (1-${max}): ${num}`);
    }
}
