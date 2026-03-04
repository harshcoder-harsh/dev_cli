import * as fs from 'fs';

export class FileUtil {
    public static getFileInfo(filepath: string) {
        if (!fs.existsSync(filepath)) {
            throw new Error(`File not found: ${filepath}`);
        }
        const stats = fs.statSync(filepath);
        return {
            size: stats.size,
            createdAt: stats.birthtime,
            modifiedAt: stats.mtime
        };
    }
}
