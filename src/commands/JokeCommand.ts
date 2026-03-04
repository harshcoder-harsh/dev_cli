import { ICommand } from './ICommand';
import { JokeService } from '../services/JokeService';

export class JokeCommand implements ICommand {
    public readonly name = 'joke';
    public readonly description = 'Displays a random joke.';
    private jokeService = new JokeService();

    public async execute(args: string[]): Promise<void> {
        try {
            const joke = await this.jokeService.getRandomJoke();
            console.log(`\n${joke.setup}`);
            setTimeout(() => {
                console.log(`${joke.punchline}\n`);
            }, 1000);
        } catch (error: any) {
            console.log(`Failed to fetch joke: ${error.message}`);
        }
    }
}
