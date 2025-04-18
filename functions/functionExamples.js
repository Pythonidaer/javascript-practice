// functionExamples.js
// Demonstrations of JavaScript function capabilities/properties with food/drink examples

// 1. First-class functions: Functions can be assigned to variables, passed as arguments, and returned from other functions
function makeDrink(drink) {
    return `Here is your ${drink}!`;
}
const serveDrink = makeDrink;
console.log(serveDrink('espresso'));

// 2. Higher-order functions: Functions that take other functions as arguments or return functions
function withSauce(food, sauceFn) {
    return `${food} with ${sauceFn()}`;
}
function srirachaSauce() {
    return 'sriracha sauce';
}
console.log(withSauce('noodles', srirachaSauce));

// 3. Pure function: Output depends only on input, no side effects
function blend(fruit1, fruit2) {
    return `${fruit1} and ${fruit2} smoothie`;
}
console.log(blend('banana', 'strawberry'));

// 4. Composable functions: Functions can be combined to build more complex operations
function chop(ingredient) {
    return `chopped ${ingredient}`;
}
function fry(ingredient) {
    return `fried ${ingredient}`;
}
function cookBreakfast(ingredient) {
    return fry(chop(ingredient));
}
console.log(cookBreakfast('potato'));

// 5. Closure-capable: Functions can "remember" their lexical scope
function makeTea(type) {
    return function(strength) {
        return `A cup of ${strength} ${type} tea`;
    };
}
const greenTea = makeTea('green');
console.log(greenTea('strong'));

// 6. Callback hell (example, commented out):
/*
setTimeout(function() {
    console.log('Boil water');
    setTimeout(function() {
        console.log('Brew coffee grounds');
        setTimeout(function() {
            console.log('Pour coffee into mug');
            setTimeout(function() {
                console.log('Add milk and sugar');
                // ...and so on
            }, 500);
        }, 500);
    }, 500);
}, 500);
*/
