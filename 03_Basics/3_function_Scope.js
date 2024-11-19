//************************** */ global Scope *******************************

// let a =10
// const b=20
// var c=30


// console.log(a);  // output is 10
// console.log(b);  // output is 20
// console.log(c);  // output is 30



// { } --> This is a Scope In all Programming language

let a = 3000;
if(true){
    let a=10
    const b=20
    var c=30
    console.log(`Inner Scope of value a is ${a}`);
    
}
console.log(`Global Scope of value a is ${a}`);


// console.log(a); // Error a is not define
// console.log(b); // Error b is not define
console.log(c); // output is 30 because c is  var
