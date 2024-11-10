// console.log(Date);
 const myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toLocaleTimeString());
//  console.log(myDate.toTimeString());

const myCreatedDate = new Date(2000,4,2);
// console.log(myCreatedDate.toString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp.toLocaleString());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.round(Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));

const newYear = new Date();

// console.log(newYear.getMonth()); // Month start will be Zeroth Index
// console.log(newYear.getMonth()+1); // Right Code Now
// console.log(newYear.getDay()); // sunday means 0(zero) and Monday means 1(one)
// console.log(newYear.getDay()+1); // Right Day now
// console.log(newYear.getDate()); // Month start will be Zeroth Index


console.log(`Today Date is ${newYear.getDate()} And Day is ${newYear.getDay()+1} and the Month is ${newYear.getMonth()+1} and the current Year is ${newYear.getFullYear()}`);


const MyYear= newYear.toLocaleString("default",{
    day:"2-digit",
    month:"long",
    year:"numeric"
})


console.log(MyYear);

