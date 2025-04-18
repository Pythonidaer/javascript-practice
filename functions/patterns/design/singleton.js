// Singleton Pattern Example
export const SingletonDrink = (function() {
    let instance;
    function createInstance() {
        return { type: 'singleton drink' };
    }
    return {
        getInstance: function() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();
