import { ICommand } from './ICommand';
import { GithubService } from '../services/GithubService';

export class GithubCommand implements ICommand {
    public readonly name = 'github';
    public readonly description = 'Shows GitHub user information.';
    private githubService = new GithubService();

    public async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.log("Please provide a username. Usage: github <username>");
            return;
        }

        const username = args[0];
        console.log(`Fetching info for GitHub user: ${username}...`);

        try {
            const info = await this.githubService.getUserInfo(username);
            console.log(`\nName: ${info.name || info.login}`);
            console.log(`Repos: ${info.public_repos}`);
            console.log(`Followers: ${info.followers}`);
        } catch (error: any) {
            console.log(`Failed to fetch GitHub info: ${error.message}`);
        }
    }
}
