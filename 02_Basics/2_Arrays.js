const Myheroes = ["Kl rahul", "ratan tata", "Aacharya Chanakya", "ChandraGupt Mourya"];

const friends = ["Chetan", "Pravin", "Uddhav", "Chaitanya"]

// Myheroes.push(friends)

// console.log(Myheroes);     //["Kl rahul", "ratan tata", "Aacharya Chanakya", "ChandraGupt Mourya", ["Chetan", "Pravin", "Uddhav", "Chaitanya"]]  Array Inside another array

// console.log(Myheroes[4][1]);   // output will be "Pravin"


// const arrayConcat = Myheroes.concat(friends) // ["Kl rahul", "ratan tata", "Aacharya Chanakya", "ChandraGupt Mourya","Chetan", "Pravin", "Uddhav", "Chaitanya"];
// console.log(arrayConcat);


const allArray = [...Myheroes, ...friends] // Spread Operator 
console.log(allArray); // ["Kl rahul", "ratan tata", "Aacharya Chanakya", "ChandraGupt Mourya","Chetan", "Pravin", "Uddhav", "Chaitanya"];  same as a concat 


const Numbers = [1,2,[3,4,5],6,7,[8,9,[10,11]]]
console.log(Numbers.flat(Infinity)); // flat method uses the depth array convert into  single array give the property flat(Infinity) output will be [1, 2, 3, 4,  5, 6, 7, 8, 9, 10,11]
  

console.log(Array.isArray("Prashant"));  // Ye array Hai ki Nahi Output Is "false"
console.log(Array.from("Prashant")); // from method array me convert krta hai ['P', 'r', 'a','s', 'h', 'a','n', 't']

console.log(Array.from({
    first_name:"Prashnat",
    last_name:"Jagtap",
    email:"prashnatjagtap2130@gmail.com"
})); // given output will be [] empty array if you have to access the values you should give the name either keys aur values

let value1 = 100
let value2 = 200
let value3 = 300

console.log(Array.of(value1,value2, value3)); // given Output will be [100,200,300]


