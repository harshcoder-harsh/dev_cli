import { ICommand } from './ICommand';
import { SystemUtil } from '../utils/SystemUtil';

export class SystemCommand implements ICommand {
    public readonly name = 'system';
    public readonly description = 'Shows system information.';

    public execute(args: string[]): void {
        const info = SystemUtil.getSystemInfo();
        console.log("System Information:");
        console.log(`OS Platform:  ${info.platform}`);
        console.log(`Architecture: ${info.arch}`);
        console.log(`CPU Cores:    ${info.cpus}`);
        console.log(`Total Memory: ${info.totalMem}`);
        console.log(`Free Memory:  ${info.freeMem}`);
        console.log(`Uptime:       ${info.uptime}`);
    }
}
