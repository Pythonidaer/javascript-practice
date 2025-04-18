// Module Pattern Example
export const DrinkModule = (function() {
    let secret = 'lemon';
    return {
        getSecret: function() { return secret; },
        makeDrink: function() { return `Making a drink with ${secret}`; }
    };
})();
