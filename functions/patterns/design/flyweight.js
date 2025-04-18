// Flyweight Pattern Example
const sharedDrinkProperties = {};
export function getDrink(type) {
    if (!sharedDrinkProperties[type]) {
        sharedDrinkProperties[type] = { type };
    }
    return sharedDrinkProperties[type];
}
