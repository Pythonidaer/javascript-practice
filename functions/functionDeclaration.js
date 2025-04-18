
/*
 * This is a function declaration. Function declarations are hoisted,
 * meaning they can be called before they appear in the code.
 *
 * function keyword is mandatory here
 * as is the function name and parentheses
 * as are the opening and closing curly braces
 * 
 * the parameters within parenthesis are optional
 * the function body is optional
 */
function logFavoriteDrink() {
    console.log('I love coffee!');
}

function logFoodInMyBelly() {
    function foodInMyBelly() {
        return "banana maple oatmeal"
    }
    return foodInMyBelly();
}

const foodIAte = logFoodInMyBelly();
console.log(foodIAte)

logFavoriteDrink();