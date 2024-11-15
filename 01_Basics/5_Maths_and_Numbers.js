
// ******************************Numbers***************************

const score = 400;
console.log(typeof(score));  // Output will be Number

const newScore = new Number(400);
console.log(typeof(newScore)); // output will be Object


console.log(newScore.toString()); // Convert a any data type into string data type
console.log(newScore.toString().length); // Output wiil be 3

console.log(newScore.toFixed(2)); // Output will be 400.00
console.log(newScore.toFixed(3)); // Output will be 400.000


const anotherNumber = 23.8648;
console.log(anotherNumber.toPrecision(3)); // Output will be 23.9
console.log(anotherNumber.toPrecision(3)); // if anotherNumber value is 123.8648 then Output will be 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Output will be 1,000,000
console.log(hundreds.toLocaleString("en-IN")); // Output will be 10,00,000




// +++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-4)); // Output Will be 4  its convert minus value into Positive integer
console.log(Math.round(23.1576)); //Output Will be 23
console.log(Math.round(23.6576)); //Output Will be 24
console.log(Math.ceil(4.2)); //Output Will be 5  jara sa bhi 4 se bada hoga to wo 5 krdega
console.log(Math.floor(4.2)); //Output Will be 4 agar 4.2 likha hai to bhi 4 lega aur 4.8 likha hoga to bhi 4 hi lega 
console.log(Math.floor(4.8)); //Output Will be 5 agar 4.2 likha hai to bhi 4 lega aur 4.8 likha hoga to bhi 4 hi lega 


console.log(Math.min(5,7,6,17,4,3,5,9)); // Output will be 3
console.log(Math.max(5,7,6,17,4,3,5,9)); // Output will be 17
 


console.log(Math.random()); // the value every time change and value comes evrytime inbetween 0-1
console.log(Math.random()*10); //1.something  how to fix after decimal i dont want number
console.log(Math.round(Math.random()*10)); // the output in between 0-10 no decimal value
console.log(Math.round(Math.random()*10)+1); // the value in between 0-11