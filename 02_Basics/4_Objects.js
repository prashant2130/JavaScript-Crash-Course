// const tinderUser = new Object()

const tinderUser = {}

tinderUser.name="Prashant Jagtap"
tinderUser.education = "MCA"
tinderUser.address = "Pune"

// console.log(tinderUser);

const regularUser  = {
    email: "prashantjagtap@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Prashant",
            lastName:"jagtap"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);



const obj1 = {
    carName : "swift",
    carType: "fourWheeler",
    carMode: "Old"
}

const obj2 ={
    itemName: "Note Book",
    noPages: 250,
    price: 40
}
const obj5 ={
    tvName: "samsung",
    antina: "Airtel",
    tvprice:35000
}

// const obj3 = {obj1 , obj2}  // this output will be inside another object {key:value {key:value}}

const obj3 = Object.assign(obj1, obj2)  //  assign() method Combine two object into single object {key:value} , yha par sari value obj1 me assign ho rahi hai 
const obj4 = Object.assign({},obj1, obj2, obj5)  // {}-> target object mtlb obj1 and obj2 ko is empty {} object me assign kro, iska bhi output same hi ayega but un sare object ki value abhi us empty object me assign ho rahi hai
// console.log(obj3);
// console.log(obj4);


// +++++++++++++++++++++++ Spread Operator ++++++++++++++++++++++++++++++++++++++++++++++

const spredit = {...obj1,...obj2,...obj5} // {carName: 'swift',carType: 'fourWheeler',carMode: 'Old',        itemName: 'Note Book',noPages: 250,price: 40,tvName:'samsung',antina: 'Airtel',tvprice: 35000}

// const spredit = {...obj1,...obj2,obj5} //{carName: 'swift',carType: 'fourWheeler',carMode: 'Old',itemName: 'Note Book',noPages: 250,price: 40,obj5: { tvName: 'samsung', antina: 'Airtel', tvprice: 35000 }}

// const spredit = {...obj1,obj2,obj5} // {carName: 'swift',carType: 'fourWheeler',carMode: 'Old',itemName: 'Note Book',noPages: 250,price: 40,obj2: { itemName: 'Note Book', noPages: 250, price: 40 },    obj5: { tvName: 'samsung', antina: 'Airtel', tvprice: 35000 }}
// console.log(spredit);



// Now we Learn  how to values Comes from Databse 
// database se jab bhi value aati hai wo array ki form me aati hai 
// for example

const users = [
    {
        id: 1,
        name:"Prashant jagtap",
        email:"pj@gmail.com",
    },
    {
        id: 2,
        name:"Kl rahul",
        email:"klr@gmail.com",
    },
    {
        id: 3,
        name:"Gautam gambhir",
        email:"gg@gmail.com",
    },
]

// console.log(users[0].name);
// console.log(users[1].email);
// console.log(users[2].id);


console.log(Object.keys(tinderUser)); // it gives the output in the form of array once the output give in array we can apply all the array methods like map, forEach, manyy more 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // [ ['name', 'Prashant Jagtap'], ['education', 'MCA'],['address', 'Pune'] ]
console.log(tinderUser.hasOwnProperty("education")); // true
console.log(tinderUser.hasOwnProperty("full name")); // false
