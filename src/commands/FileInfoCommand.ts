import { ICommand } from './ICommand';
import { FileUtil } from '../utils/FileUtil';

export class FileInfoCommand implements ICommand {
    public readonly name = 'fileinfo';
    public readonly description = 'Shows file size and creation date.';

    public execute(args: string[]): void {
        if (args.length === 0) {
            console.log("Please provide a filename. Usage: fileinfo <filename>");
            return;
        }

        const filename = args[0];
        try {
            const info = FileUtil.getFileInfo(filename);
            console.log(`File: ${filename}`);
            console.log(`Size: ${info.size} bytes`);
            console.log(`Created: ${info.createdAt.toLocaleString()}`);
        } catch (error: any) {
            console.log(error.message);
        }
    }
}
