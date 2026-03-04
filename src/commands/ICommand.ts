export interface ICommand {
    readonly name: string;
    readonly description: string;
    
    execute(args: string[]): Promise<void> | void;
}
