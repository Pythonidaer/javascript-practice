// Mixin Pattern Example
export const drinkable = {
    drink() {
        console.log(`Drinking ${this.name}`);
    }
};

export function applyDrinkable(obj) {
    Object.assign(obj, drinkable);
}
