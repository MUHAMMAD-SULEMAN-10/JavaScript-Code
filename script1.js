// array objects destructuring import and export 
// map filter arrow fncs (implicit return) spread operator 

// arrays 
// array aissa data structure hai jo ek se ziada elements rakh skta ha

// immutable va mutable 
// primitive and reference 
// this is a refrence concept 
var arr = [1,2,3,4]; // 1,2,3
var arr2 = arr;

arr2.pop(); //1,2,3


// react js mein apko ek state naam ke cheez milegi us bande ko ap mutate nahi kr skty mtlb direct uski value nahi remove hogi jode skty. beacause state is immutable.
//not allowed in react 
// var state = [1,2,3,4];
// state.pop()

//possible eay
// var state = [1,2,3,4]; state current value can not change
// state= [1,2,3]  give new value to a state then we can make changes

//this is not allowed copy reference
// var state = [1,2,3,4,5];
// var copy  = state ;
// copy.pop()

//concept is comming that is ...spread operator we follow this

// var state = [1,2,3,4,5]

// var copy = [...state];  spread operator just copy the values not the reference from the variable values

// copy.pop();


//Now this time we have a state is like a object 

// var state = {name: "Suleman", age: 24};
// //we need to change the name
// var copy = {...state}; first copy is required 
// copy.name = "Muhammad";
// state = copy;


//DESTRUCTURING:

// var obj = {name: "suleman", age: 24, email: "hello@gmail.com"};
//destructruing mens cheezon ko bahir nikalna in a simple way
// const {age} = obj;
// const {email} = obj;

//another example:
// var obj = {name: "suleman", age: 24, social:{
//     facebook:{
//     first: "name",
//     id: "1234",
// },
// },
// };
//here we need the destructring:
// const {sec} = obj.social.facebook;




//Another example of destructrin by using the array

arr = [12, function(){}, 13];
//now i just want to access the values of 12 and 13 
//this is called array destrctring:
var [chacha,,halwaaaaaa]= arr;

//IMPORT AND EXPORT 

// component is a part of page like a navbar ek component ha , card ek component ha , home page mn landing page ek component ha or components ko hm alag , alag files mn store krty hn or last mein inko combine b krna hota ha.

//demo:

/* navbar = export 

sidebar = export 

cart = export 

main = import navbar, sidebar, cart */ // jahan zarort ha wahan import kr lo agr zarorrat ha to import krein gy.

//EXAMPLE:

/* 
1st file:

function Cart(){

}
export default Cart;

2nd file will be:
import CART from filename.

*/

//MULTIPLE EXPORT AND IMPORT FILES:

/* 
first_file:

export function Cart(){
}

export function Abcd(){
}

2nd_file:
//export 
import {Cart, Abcd} from file_name:

*/


//ARROW FUNCTION IMPLICIT RETURN:

//simple function
// function abcd(){
// }

//sub sy pehly function ka naam phr = then usky bad fat() then arrow or currly braces.
// const abcd = ()=>{
//     console.log("Hello world!");
// }
// abcd();


//FAT ARROW FUN WITH 1 PARAMETER:

// const abcd = (val)=>{
//     console.log(val);
// }
// abcd(12);

//agr one parameter ho hum () isko remove b kr skty hn just hmein parameter ka name likhna hoga.

// const abcd = val => {
//     console.log(val);
// }
// abcd(12);


//FAT ARROW FUNCTION WITH IMPLICIT RETURN:

// const abcd = ()=>12;// arrow k fori jo bad likha ha wo return hoga like 12 jhan per function call howa ha.

// console.log(abcd() +  1);

//agr hm ny brackets laga dein arrow k bad then hum ko return krna hoga khud sy explicit like:

// const abcd2 = ()=>{
//     return "Suleman";
// }

// console.log("Hey " + abcd2());


//NOTE:

//If we want to return an object then hum {} simple ye nahi likh skty wo smjhy ga ky ye body k leay ha to undefined hona isleay hum use krein gy ({}) ye syntax:

// const abcd = ()=>({name: 'hello', age: 23})
// console.log(abcd())


//MAP and FILTER:

//map and filter is widely used in react
//Dono he array per run hoty hn, dono ka kam ha array mein kuch perform krna or ek new array return krna ha.

//MAP: modify the array
//map saray banday return krta ha.
//her element per kuch kro or new array mein rakho , concatition , mul, div in a new array


// var arr = [1,2,4,5,6];
//foreach ke anfer aata hai function and function k ander ata ha parameter value.

//same like in a map we get fun in a map as a parameter value:
//map k ander return kran lazmii ha 

// arr.map((value)=>{

// })
//map k ander return krny ke wajh sy he new element array mein insert hoty hn 

// arr.map(value=>{
//    return val*2;
// })

//simple code of above just one value return that's why.

// var arr = [1,2,3,4,5,6];
// const and = arr.map(value=>val*2) will give a new modified array



//STATE CONCEPT FOR UPDATE:

//state ek array ha us mein numbers hei and apko har number ko +1 karna ha. 
//state has been updated:

// var state = [1,2,3,4,5];
// const ans =state.map(elem => elem+1 )



//EK ARRAY HA SARAY NUMBERS JO K 5 SE BADE HO UN MEIN 5 ADD KR DO AND BAAKI NUMBERS WESY HE RETURN KARO ARRAY MEIN.

// var state = [11,22,3,4,5,6,7,8,9,10,1,11,12];

//by using the ternary operator 

// const ans = state.map(elem => elem>5 ? elem+5 : elem);
// FILTER:

// filter minimum bandy b return kar skta ha.
// jab original array ka size kam krna ho wahan filter use hota ha 

// ek array mein se saare nums hata do ke 5 sy jo small hai.

// var arr = [1,2,3,4,5,6,7,8];
// const ans = arr.filter(elem => elem>4)

//2ND EXAMPLE:
var arr = [
    {name: "S", gender: "m"},
    {name: "A", gender: "m"},
    {name: "B", gender: "f"},
    {name: "S", gender: "m"}
]
const ans = arr.filter(elem => elem.gender === "m")
//3RD EXAMPLE:
var arr2 = [
 {product: "iphone", price: 120000},
 {product: "airpods", price: 50000},
 {product: "ipad", price: 8000},
 {product: "nokia", price: 6}
]
const ans2 = arr2.filter(elem => elem.price<20 )














