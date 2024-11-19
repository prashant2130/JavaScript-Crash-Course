// *Note - Destructuring Object Ki bhi hoti hai Aur Array Ki bhi hoti Hai


const course ={
    courseName:"Javascript",
    courseFee:"Free Of Cost",
    Provider:"Hitesh Sir",
    streamingOn:"Youtube"
}
const {courseFee, Provider} = course;
console.log(courseFee, Provider);


const {courseName: Cname} = course;
console.log(Cname);



//+++++++++++++++++++++ API +++++++++++++++++++++++++++

// pehele time par backend se values ati thi XML ke Format me 
// Abhi ke time backend se value ati hau JSON format me 


// json aur object me itna hi farak hai json ki key aur value dono string format me hoti hai  
// json object key and value should be in string format either object just values in string format

// {
//     "name":"Prashant jgatap",
//     "designation":"MCA",
//     "College":"DYP",
//     "CGPA":"8.01",
// }


// Sometimes we get API in the form of Array

// array start here [
//     {

//     },
//     {

//     },
//     {

//     },
// ] array End here

// Note *  Agar hame api se ane wala data ko recognise krna hai ya use samjna hai to hum ek website ka use krte hai https://jsonformator.com  aur us data ko hum tree format select krke us data ko easily read kr skte hai


// object ends here     