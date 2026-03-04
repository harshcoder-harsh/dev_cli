import axios from 'axios';

export class ApiService {
    public static async getJson<T>(url: string): Promise<T> {
        try {
            const response = await axios.get<T>(url, { headers: { 'User-Agent': 'DevCLI/1.0' } });
            return response.data;
        } catch (error: any) {
            throw new Error(`API request failed: ${error.message}`);
        }
    }

    public static async getText(url: string): Promise<string> {
        try {
            const response = await axios.get(url, { headers: { 'User-Agent': 'curl/7.68.0' }, responseType: 'text' });
            return response.data;
        } catch (error: any) {
            throw new Error(`API request failed: ${error.message}`);
        }
    }
}
