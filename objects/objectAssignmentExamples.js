// objectAssignmentExamples.js
// Examples demonstrating various ways objects can be assigned and used in JavaScript

// 1. Assigned to a variable
const drink = { name: 'coffee', temperature: 'hot' };

// 2. Assigned as an entry in an array
const drinksArray = [drink, { name: 'tea', temperature: 'warm' }];

// 3. Assigned as a property of another object
const breakfast = {
    main: 'pancakes',
    beverage: drink
};

// 4. Passed as an argument to a function
function describeDrink(obj) {
    return `This is a ${obj.temperature} ${obj.name}.`;
}
console.log(describeDrink(drink));

// 5. Returned as a value from a function
function createSnack(type) {
    return { type, calories: 200 };
}
const snack = createSnack('granola bar');
console.log(snack);

// 6. Dynamically creating and assigning properties
snack.flavor = 'chocolate';
snack['size'] = 'medium';
console.log(snack);

// 7. Objects can be deeply nested and mutated
breakfast.side = { name: 'fruit salad' };
breakfast.beverage.sweetener = 'honey';
console.log(breakfast);
