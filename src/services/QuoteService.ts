import { ApiService } from './ApiService';

export interface QuoteResponse {
    content: string;
    author: string;
}

export class QuoteService {
    public async getRandomQuote(): Promise<QuoteResponse> {
        try {
            const url = "https://api.quotable.io/random";
            return await ApiService.getJson<QuoteResponse>(url);
        } catch {
            const fallbackUrl = "https://dummyjson.com/quotes/random";
            const response = await ApiService.getJson<any>(fallbackUrl);
            return { content: response.quote, author: response.author };
        }
    }
}
