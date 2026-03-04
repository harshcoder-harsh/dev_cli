import { ICommand } from './ICommand';

export class DateCommand implements ICommand {
    public readonly name = 'date';
    public readonly description = 'Displays current date and time.';

    public execute(args: string[]): void {
        const now = new Date();
        console.log(now.toLocaleString());
    }
}
