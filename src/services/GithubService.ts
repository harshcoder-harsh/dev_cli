import { ApiService } from './ApiService';

export interface GithubUser {
    name: string;
    public_repos: number;
    followers: number;
    login: string;
}

export class GithubService {
    public async getUserInfo(username: string): Promise<GithubUser> {
        const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
        return await ApiService.getJson<GithubUser>(url);
    }
}
