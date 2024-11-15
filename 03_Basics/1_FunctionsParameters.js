// console.log("P");
// console.log("R");
// console.log("A");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");
// console.log("T");

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName  // its just a reference not get any output call the function using sayMYName()
// sayMyName()


function addTwoNumbers(num1,num2){
     console.log(num1+num2);
    
}

// addTwoNumbers(5,4) // the output will be 9

// const result = addTwoNumbers(5,4);  // the Output will be 9  but result variable me value kya aayegi let see
// console.log(result);  // the output will be "Undefined"


function addThreeNumbers(num1,num2,num3){
    // const result1 = num1+num2+num3;
    // return result1
    return num1+num2+num3;
    //console.log(result1) //not execute this line because of after print return keyword doesn't executed any statement  
}

addThreeNumbers(6,9,8)// ye print nahi hoga kyuki hum return kr rahe hai koi value kko to use hume kisi variable me store krna padega

const returnValue = addThreeNumbers(5,9,6)
// console.log(returnValue);  // now the result1 variable value is assigned 20


function loginUserMessage(username){
    if(!username){
        console.log("Please Enter the username");   
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Prashant Jagtap")); // output will be "Prashant Jagtap just logged in"


