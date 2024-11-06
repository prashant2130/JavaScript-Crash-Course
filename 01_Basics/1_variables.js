const accountId = 52117;  // cannot be reassigned and cannot be changed 
let accountEmail = "prashant@gmail.com"; // can be changed and reassigned
var accountPassword = "12345"; // can be changed and reassigned
accountCity = "Pune"; // it a global variable
let accountState; // after printing her value is undefined 


//accountId="1234"; // cannot be reassigned and cannot be changed
accountEmail="suraj@gmail.com";
accountPassword="123456";
accountCity="Mumbai";

console.log([accountId,accountEmail,accountPassword,accountCity,accountState]); //output in single line
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //output in tabular format

/*
prefer not to use var keyword
because of issues in block scope and functional scope
*/

