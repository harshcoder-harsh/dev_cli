import { ApiService } from './ApiService';

export class WeatherService {
    public async getWeather(city: string): Promise<string> {
        const url = `https://wttr.in/${encodeURIComponent(city)}?format=%t`;
        return (await ApiService.getText(url)).trim();
    }
}
