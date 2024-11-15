// Singleton

//object literals 

//Object.create   // ise use krke bhi object create krte hai

const Jsuser = {
    name:"Prashant",
    age:25,
    "full name": "Prashant S Jagtap",  // How We Can access this type of value  
    location:"Pune",
    email:"prashnat@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "saturday"]
}

// console.log(Jsuser.email);
//console.log(Jsuser[email]); // gives an error if i have use square bracket to access object key always given in the string ["email"]
// console.log(Jsuser["email"]);
// console.log(Jsuser["name"]);


// console.log(Jsuser["full name"]);   // output will be  "Prashant S Jagtap"



// Ek Symbol Lo Aur use  Object key  Me put krke  uski value print krke Dikhao

const mySym = Symbol("key1")


const symbolkey = {
    name: "Suraj Jagtap",
    [mySym]: "myKey1",
}

// console.log(symbolkey.mySym); // the output will be "myKey1"
// console.log(typeof symbolkey.mySym); // the datatype should have "Symbol" but it give "String" Thats why this is not a right way to declare aur call/invoke the value 

// console.log(symbolkey[mySym]);// now its a right way to access a symbol variable
// console.log(symbolkey);// the typeOf this is now "Symbol"

// Object.freeze(Jsuser); // Humne us Object ko freeze kiya mtlb hum us Object me Kuch Changes nahi kr skte
// Jsuser.name= "Prashant Jagtap" // not workig because of humne object ko freeze kiya hai
// console.log(Jsuser);



Jsuser.greeting =  ()=> {
    console.log("Hello Js User");
    
}

Jsuser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);  // this keyword is refers to the current object
    
}
console.log(Jsuser.greeting);   // (Function Annonymous) mtlb Function Execute nahi hua hai uska sirf Reference aya hai 
console.log(Jsuser.greeting());   // abhi humne function ko Execute kiya hai

console.log(Jsuser.greetingTwo()); 
