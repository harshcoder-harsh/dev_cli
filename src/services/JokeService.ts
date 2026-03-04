import { ApiService } from './ApiService';

export interface JokeResponse {
    setup: string;
    punchline: string;
}

export class JokeService {
    public async getRandomJoke(): Promise<JokeResponse> {
        const url = "https://official-joke-api.appspot.com/random_joke";
        return await ApiService.getJson<JokeResponse>(url);
    }
}
