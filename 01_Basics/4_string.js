//First Way Define a String
const name = "prashnat";
const RepoCount = 50
// console.log(name +" "+ RepoCount + " value");



// String Literal 

// console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`);


// Second way to define a String using Object/Constructor  that string gives inn console all the methods 
// for example
// const MyName = new String("Prashant Jagtap");
// MyName


const MyName = new String("PrashantJ");
// console.log(MyName);


// console.log(MyName[9]);
// console.log(MyName.__proto__);
// console.log(MyName.length);
// console.log(MyName.trim());
// console.log(MyName.toUpperCase());
// console.log(MyName.toLowerCase());
// console.log(MyName.charAt(5));
// console.log(MyName.indexOf("s"));
console.log(MyName.substring(3,7));  // End number is cannot be included keep in mind always
console.log(MyName.slice(0,7));


// const newString = MyName.substring(0,4)
// console.log(newString);


const anotherString = MyName.slice(-8,4)
console.log(anotherString);

const url = "https://Prashant%20Jagtap.com";
const newUrl=(url.replace("%20","Satish")); // Given output is "https://PrashantSatishJagtap.com"
console.log(newUrl);

// we can ask also is there in url having Prashnat name

console.log(url.includes("Prashant")); // True 
console.log(url.includes(".in")); // False




const Mystring ="Prashant-Uddhav-Suraj-Nilesh";
console.log(Mystring.split("-"));