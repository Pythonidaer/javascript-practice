// Prototype Pattern Example
export function Drink() {}
Drink.prototype.type = 'generic';
Drink.prototype.describe = function() {
    return `This is a ${this.type} drink.`;
};
