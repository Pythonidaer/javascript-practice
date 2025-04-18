// functionUsageRoles.js
// Examples of different roles/functions can play in JavaScript

// 1. Callback function (with Array.prototype.forEach)
const drinks = ['tea', 'coffee', 'juice'];
drinks.forEach(function(drink) {
    console.log(`Serving ${drink}`);
});

// 2. Event handler (for browser, will only work in browser environment)
document.getElementById('orderBtn').addEventListener('click', function() {
    alert('Order placed!');
});

// 3. Promise resolver (using setTimeout to simulate async)
function makeSandwich() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Sandwich is ready!');
        }, 1000);
    });
}
makeSandwich().then(function(message) {
    console.log(message);
});

// 4. Factory function
function createSmoothie(fruit) {
    return {
        type: 'smoothie',
        mainIngredient: fruit,
        blend: function() {
            return `Blending a ${fruit} smoothie!`;
        }
    };
}
const bananaSmoothie = createSmoothie('banana');
console.log(bananaSmoothie.blend());

// 5. Class method
class Chef {
    constructor(name) {
        this.name = name;
    }
    cook(dish) {
        return `${this.name} cooked ${dish}`;
    }
}
const chefAnna = new Chef('Anna');
console.log(chefAnna.cook('omelette'));
