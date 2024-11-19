


// Hoisting declaration
console.log(addTwo(5)); // output is 6 

function addTwo(num1){          // This is a simple function
    return num1 + 1;
}
// console.log(addTwo(5)); // output is 6 




// Hoisting declaration
console.log(addThree(6)); // getting error because we store function in a variable thats why hoisting not work

const addThree = function(num1){     // this is called function Expression 
    return num1 + 2
}
// console.log(addThree(6));  // output is 8

