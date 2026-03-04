import { ICommand } from './ICommand';
import { QuoteService } from '../services/QuoteService';

export class QuoteCommand implements ICommand {
    public readonly name = 'quote';
    public readonly description = 'Returns a random quote.';
    private quoteService = new QuoteService();

    public async execute(args: string[]): Promise<void> {
        try {
            const quote = await this.quoteService.getRandomQuote();
            console.log(`\n"${quote.content}"`);
            console.log(`- ${quote.author}\n`);
        } catch (error: any) {
            console.log(`Failed to fetch quote: ${error.message}`);
        }
    }
}
