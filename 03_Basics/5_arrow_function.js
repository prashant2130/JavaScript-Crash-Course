const user ={
    username : "prashant jagtap",
    price :999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);  
        console.log(this);
         
    }
}
// user.welcomeMessage()  // Output is "Prashnat jagtap welcome to website"
// user.username = "Uddhav"
// user.welcomeMessage()


// console.log(this); // empty object { }

// ********************** Note ******************************

// arrow function does not use "this" Keyword

// IMP Interview *
//browser ke ander global object hai wo hai "window" object



function cricket(){
    const username = "prashant"
    console.log(this.username); // output is "undefined"
}
cricket()


const ball = function(){
    const username = "jagtap"
    console.log(this.username);   //  output is "undefined"
}
ball()

const bat =() => {
    const username = "Prashant Jagtap"
    console.log(this.username);       //  output is "undefined"
}
bat()


// ************************* Arrow Function ********************* 

// const addTwo= (num1,num2) => {
//     return num1 + num2  
//  }

// ************ Implicit Return Arrow Function **************** 
const addTwo = (num1, num2) => num1 + num2;
const addThree = (num1, num2) =>  { return num1 + num2 }; // Curly braces me likha to return keyword likhna padega 
const addFour = (num1, num2) =>  (num1 + num2);  // Parenthesis me likha to return keyword ki need nahi hoti


// how we can return a Object 

const addFive = (num1, num2) => { username: "Prashant"};  // not getting value output is "undefined"

// the right way to declare object in a arrow function or function is to put value in ({ })

const addSix = ( ) => ({ username: "Prashant jagtap"})




 console.log(addTwo(5,10));      // output is 15
 console.log(addThree(54,45));  // output is 99
 console.log(addFour(17,65));   // output is 82
 
 console.log(addFive(17,65));  // Undefined

 console.log(addSix()); // output is { username: 'Prashant jagtap' } 
 