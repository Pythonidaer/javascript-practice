// Observer Pattern Example
export class DrinkSubject {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    notify(drink) {
        this.observers.forEach(fn => fn(drink));
    }
}
