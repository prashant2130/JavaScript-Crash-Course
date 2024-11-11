const myArray = [75,12,4,51,6,58,65]

const myHeroes = ["chatrapati Shivaji Maharaj", "Kl Rahul", "ratan Tata", "Apj Abdul Kalam", "Aacharya Chanakya"]

// console.log(myArray[6]); //the output will be 65

const array2 = new Array(1,2,3,4,5,6,7,8,9)  // Automatically add the Square Brackets [] 
// console.log(array2); // output will be [1,2,3,4,5,6,7,8,9]


//++++++++++++++++++++++++ Arrays Methods ++++++++++++++++++++++++++++

// myArray.push(18,1)  // insert the element at the end  of an array
// myArray.pop()      // Delete the element at the end of an array 
// myArray.unshift(9,3) // insert the element at the beginning of an array
// myArray.shift()    // Delete the element at the beginning of an array



const newArray = myArray.join()  // after join method convert array Object type to "String"

// console.log(myArray);
// console.log(typeof myArray); // Object
// console.log(newArray);
// console.log(typeof newArray); // String 


console.log("A", myArray);          // A[75,12,4,51,6,58,65]
const myar1 = myArray.slice(1,3)//Index [00,01,2,03,4,05,06]
console.log(myar1);                 //  [12,4]               slice method never add Last index
console.log(myArray);               //  [75,12,4,51,6,58,65] After use slice method Never Change Original Array


 
console.log("B", myArray)              // A[75,12,4,51,6,58,65]
const myar2 = myArray.splice(1,3)  //Index [00,01,2,03,4,05,06]
console.log(myar2);                //  [12,4,51]            splice method add last element also
console.log(myArray);              //  [75,6,58,65]         After use splice method its Change original Array  



var x = [1,2,3,4]
var y=x;
console.log(y);  // output will be [1,2,3,4]
x.length=0;
console.log(x,y);   //output will be [] []

