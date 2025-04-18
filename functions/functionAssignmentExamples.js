// functionAssignmentExamples.js
// Examples demonstrating various ways functions can be assigned and used in JavaScript

// 1. Assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// 2. Assigned as an entry in an array
const functionArray = [greet, function(name) { return `Hi, ${name}!`; }];

// 3. Assigned as a property of another object
const messenger = {
    formal: greet
};

// 4. Passed as an argument to a function
function callWithName(fn, name) {
    return fn(name);
}
console.log(callWithName(greet, 'Sam'));

// 5. Returned as a value from a function
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const heyGreeter = createGreeter('Hey');
console.log(heyGreeter('Taylor'));

// 6. Dynamically creating and assigning function properties
messenger.casual = function(name) { return `Yo, ${name}!`; };
messenger['excited'] = function(name) { return `Hey!!! ${name.toUpperCase()}!`; };
console.log(messenger.casual('Alex'));
console.log(messenger.excited('Alex'));

// 7. Functions can be deeply nested and mutated
messenger.nested = { inner: greet };
messenger.nested.inner = function(name) { return `Greetings, ${name}.`; };
console.log(messenger.nested.inner('Jordan'));
