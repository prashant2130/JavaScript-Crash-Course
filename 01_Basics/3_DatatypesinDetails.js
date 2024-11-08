//there are two types of Datatypes

// 1) Primitive Datatypes 
// 2) Non Primitive Datatypes 

// Primitive Datatypes are those datatypes (Copied DataTypes)
//1) String
//2) Number
//3) Null
//4) Boolean 
//5) BigInt
//6) Symbol
//7) Undefined


// NonPrimitive Datatypes are those DataTypes (Reference DataTypes)
//1) Array 
//2) Object
//3) Functions


// There Are two Types of Memory 
// 1) Stack  (Primitive Data Types Are store In that Memory)
// 2) Heap   (Non-Primitive Data Types Are Store In that Memory)

// For Example

// let str1 = "Prashant"
// let str2 = str1
//  console.log(str2)
//  str2= "suraj"
//  console.log(str2);

//  let myNumber = 123;
//  let myNull = "";
//  let isBoolean = true;
//  let MyBigint = 1264464994516499564665654644n;
//  var Msymbol = Symbol(123)
//  var Msymbol = Symbol(123)

//  let myUndefined;

//  console.log(typeof(myNumber));
//  console.log(typeof(myNull));
//  console.log(typeof(isBoolean));
//  console.log(typeof(MyBigint));
//  console.log(typeof(Msymbol));
//  console.log(typeof(myUndefined));



//  Primitive Data Types Are store in Stack Memory and its gives copy of that given variable . Primitive Data Types are store Single Value and after we use the same variable name to assign different value it occupy another memory space.

//  Non-Primitive Data Types are store in Heap Memory Once assign a value  and after change this value the actual value was changed. Non-Primitive data Types are store Multiples values. it does not occupy another memory space. 
 
//Define a Function
const MyFunction = function(){
    console.log("Hello Prashant Welcome To Our JavaScript Course");
    
}
MyFunction();// invoke/ Call the myFunction without need console log directly called it 

// Define a Array

const Cricketer = ["Kl Rahul", "Virat Kohali", "Saurabh Ganguly", "Sachin Tendulkar", "Ajinkya Rahane", "Kedar Jadhav","Ruturaj Gaikwad"]
console.log(Cricketer);


// define a Object

const MyObj ={
    name:"Prashant Jagtap",
    work: "Fresher",
    education:"Master Of Computer Application",
    intern:"Coding Savvy and ExcelR",
    profile:"MERN stack and Full stack Java Developer",
}
console.log(MyObj);
console.log(MyObj.education);

