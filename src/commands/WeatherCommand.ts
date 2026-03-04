import { ICommand } from './ICommand';
import { WeatherService } from '../services/WeatherService';

export class WeatherCommand implements ICommand {
    public readonly name = 'weather';
    public readonly description = 'Displays weather for a city.';
    private weatherService = new WeatherService();

    public async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.log("Please provide a city. Usage: weather <city>");
            return;
        }

        const city = args.join(' ');
        console.log(`Fetching weather for ${city}...`);

        try {
            const temp = await this.weatherService.getWeather(city);
            console.log(`Temperature: ${temp}`);
        } catch (error: any) {
            console.log(`Failed to fetch weather: ${error.message}`);
        }
    }
}
