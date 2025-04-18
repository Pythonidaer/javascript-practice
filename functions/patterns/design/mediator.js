// Mediator/Middleware Pattern Example
export class DrinkMediator {
    constructor() {
        this.handlers = [];
    }
    use(handler) {
        this.handlers.push(handler);
    }
    request(drink) {
        let req = { drink };
        this.handlers.forEach(handler => handler(req));
        return req;
    }
}
