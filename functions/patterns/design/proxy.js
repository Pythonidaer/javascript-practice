// Proxy Pattern Example
export function DrinkProxy(drink) {
    return {
        serve: function() {
            console.log('Checking access...');
            drink.serve();
        }
    };
}
