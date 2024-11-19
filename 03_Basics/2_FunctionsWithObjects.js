// function calculateCarPrice(num1) {
//     return num1   
// }
// console.log(calculateCarPrice(200)); // output will be 200



function calculateCarPrice(...num1) {
    return num1   
}
// console.log(calculateCarPrice(200,300,400)); // output will be get a array [200,300,400]



function calculateCarPrice(val1, val2, ...num1) {
    return num1   
}
// console.log(calculateCarPrice(200,300,400,500,2000)); // output will be val1[200], val2[300], ...num1[400,500,2000] final output is [400,500,2000] because of return only num1 


const user ={
    userName:"Prashant",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and Price is ${anyObject.price}`);
}

// handleObject(user)

// we can also Pass Object in a function argument

handleObject({
    userName:"suraj",
    price:1000
})

const myNewArray = [0,20,40,8,100,200,700]

// function handleArray(anyArray){
//     return anyArray
// }
// console.log(handleArray(myNewArray));  // output is [0,20,40,8,100,200,700]


function handleArray(anyArray){
    return anyArray[4]
}

console.log(handleArray([
    1000,2000,3000,4000,5000
]
)); // output is 5000
