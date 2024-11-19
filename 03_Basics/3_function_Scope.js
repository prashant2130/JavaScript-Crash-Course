//************************** */ global Scope *******************************

// let a =10
// const b=20
// var c=30


// console.log(a);  // output is 10
// console.log(b);  // output is 20
// console.log(c);  // output is 30



// { } --> This is a Scope In all Programming language

// let a = 3000;

// if(true){
//     let a=10
//     const b=20
//     var c=30
//     console.log(`Inner Scope of value a is ${a}`);
    
// }
// console.log(`Global Scope of value a is ${a}`);


// console.log(a); // Error a is not define
// console.log(b); // Error b is not define
// console.log(c); // output is 30 because c is  var



function MyMother(){
    const username = "Prashant"

    function childMe(){             
        const website = "Youtube"
        console.log(username);  // this is accessible outside the function variable in nested function
    }
    // console.log(website);  // this is not accessible outside the function two  
    // childMe()
    
}
// MyMother()


// for example : childMe and MyMother 

// me mazya mother la ice-cream magu shakto pn mother mala ice-cream nahi magu shakat 

// me MyMother chya Properties access kru shakto pnn MyMother mazya Properties access nahi kru shakat 

// ander ka function bahar ke function ke variables ko access kr sakta hai



if(true){
    const username = "Prashant jagtap"
    if(username === "Prashant jagtap"){
        const website = "Youtube Series"
        console.log("My Username is right and access the outside the variable");
        // console.log(username + " "+ website);  // output is Prashant jagtap Youtube Series
    }
    // console.log(website)  // website is not define
    console.log(username); // output is Prashant jagtap
}
// console.log(username); // username is not define

