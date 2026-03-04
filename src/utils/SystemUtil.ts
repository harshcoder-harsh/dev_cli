import * as os from 'os';

export class SystemUtil {
    public static getSystemInfo() {
        return {
            platform: os.platform(),
            arch: os.arch(),
            cpus: os.cpus().length,
            totalMem: (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB',
            freeMem: (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB',
            uptime: (os.uptime() / 3600).toFixed(2) + ' hours'
        };
    }
}
