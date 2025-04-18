// Command Pattern Example
export function executeCommand(command) {
    command.execute();
}

export class DrinkCommand {
    constructor(drink) {
        this.drink = drink;
    }
    execute() {
        console.log(`Preparing ${this.drink}`);
    }
}
