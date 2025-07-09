//Syncronized code: 
//JS by default is Syncronized
//in which varibales execute one by one from top to bottom
//like a car is going on the road if you stop then everyone will stop like block on road


//Asyncronized:
//In which the code is running after some time
//in which if one person need a burger then the car will not stop
//one friend buy the burger and other will run the car 
//when friend buy the complete burger then he callback to druver friend and pick him from the shop
//in this way the trafficf wil not block

//example:

// function greet(name){
//     console.log("Hellow World" , name);
// }

// setTimeout(greet, 2000 , 'Salman');//work like Asyncronized
// console.log("This line will print frist");//work like Syncronized code:



//Anonymous Function in SettimeOut
//


// function greet(name){
//     console.log("Hellow World" , name);
// }

// const timeOutId = setTimeout(() => {// this will return timeoutId to stop this function
//     greet('SALMAN Afzal')//greet funtion is calling with value
// }, 2000);

// //ab ye nahi chaly ga or stop rhy ga ye tb use krty hein jb Api k trough data nahi milta ya internet dely ho 
// //phr hum use krty hein  
// clearTimeout(timeOutId);// ye Id ly ga setTimeOut ke usko stop krny ky leay

//Passing an object:


// function greet(obj){
//     console.log("Hellow World" , obj.name);
// }
//  setTimeout(() => {// this will return timeout Id to stop this function
//  greet({     
//     name:'salmanafzal' // greet fun is calling with objct passing in the function greet
//  }) 
//  }, 2000)   


// const  intervalId  = setInterval(increaseCount, 2000);//passing the fun , it will print numbers every 2 sec with increment 
// let count = 0;
// function increaseCount(){
//     count++;
//     console.log(count)
   
//     const  date = new Date().toTimeString();
//     console.log(date);


//     if(count == 5 ){
//         clearInterval(intervalId);
//     }
    
// }

//Call Back function:

//jb ek function k ander dosra fun as parameter pass krty hein wo call back ha
//per jb hum bar bar ziada time call back krty hein to wo chez call back hell hoti ha
// //or is condition ko solve krny k leay hum promises ka use krty hen.

// const ordrrPizza = () => {
//    setTimeout(() => {
//       const pizza = "Pizza"
//       return pizaa;

//    }, 2000); // by default it will return an undefined 
// const mypizaa = ordrrPizza();
// console.log(mypizaa);

//oper wala code block hoga pta nhi kb pizza mila hoga ku k hum ny ny isy async bnaya ha 
//ye code ksi or road per chly ga pta nhi chly ga kn pizza lena

//


// const ordrPizaa = (myFunction)=>{//callback function is parameter  
//     setTimeout(() => {
//     const Pizaa = "Crust Pizza";
//      myFunction(Pizaa);         //calling the callback function and will receive value 
//      }, 2000);
// }
// // myFunction is a parameter in the ordrPizaa function definition. It represents the function that will be passed in.
// notifyOrSucess is an argument provided to ordrPizaa when it's called. It gets assigned to myFunction.



// ordrPizaa((Pizaa)=>{ //this is an aninymous function passing in the orderPizza fun
//     console.log('here is ', Pizaa);
// });


// function notifyOrSucess(Pizaa){// usisng statement regualr function
//     console.log("notify me on receving the ", Pizaa);
// }

// ordrPizaa(notifyOrSucess);
// console.log("Road will contine for traffic no blocking");


//Call Back Hell:


//  function orderPizza(myFunction){
//      getCheese((chees) =>{
//         makeDough(chees , (dough) =>{
//             getPizza(dough, (pizza) =>{
//                 myFunction(pizza);
//             })

//         })

//      }) 

// }

// function getCheese(next){
//     setTimeout(() => {
//     const chees = '🍛';
//     console.log("sending the " , `${chees}`)
//     next(chees);
        
//     }, 2000);
// }


// function makeDough(chees , next ){
//     setTimeout(() => {
//         const dough = chees + '🍜';
//         console.log("sending the" ,  `${dough}`)
//         next(dough);
//     }, 2000);
    
// }

// function getPizza(dough, next ){
//     setTimeout(() => {
//         const pizza = dough +'🍕'
//         console.log("cheez and dough make ", `${pizza}`)
//         next(pizza)
//     }, 2000); 
// }

// function notifyOrSucess(pizza){
//     console.log("here is notification for my pizza", pizza)

// }

// orderPizza(notifyOrSucess);





















//Promises:
//ye hmein ek promise return deta ha wo k cheez abi tk bani nhi magr jb bani dy don ga
//it works like ticket mtlb apko tickket mil jati ha jb aao gy phr aeroplane mein beth jana 
// ek ha promise ko bnata ha dosra banda usy use krt ah
//call backs ke jagha hum promise ka use krty hein
//promise ka fiada ye ha k hum levels mein nahi ja rahy hoty.




//promise is good way to handle asyncronous operations
//It has three stages: 1- pending , 2 fullfilled . 3- Rejected 

//   function orderPizaa(){
//      return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const pizza = '🍕'
//             resolve(pizza);//here in resolve primise in fullfil state and (then function) will execute
//             //rejected(pizza);// here in reject promise in rejected state and (catch function) will execute
//         }, 2000);

//         //using condition with setTimeout:

//       //   setTimeout(() => {
//       //    const pizzaAavailabel= true;
//       //    const pizza = '🥮';
//       //    if(pizzaAavailabel){
//       //       resolve(pizza);

//       //    }
//       //    else {
//       //       reject ('we do not have pizza')
//       //    }
         
//       //   }, 3000);

//      })
//   }

// //   const pizzaPromise = orderPizaa();//will give us promise 


// //   pizzaPromise//iski base per hm 2 function call krty hn then and catch
// //   .then((pizza , pizza1, error)=>{// here we recive pizza through resolve

// //    console.log('my pizaa', pizza);
// //    console.log(error);

// //   }).catch (error =>{
// //    console.log('error accured ', error);
// //   })




//Railway station:

// function railwayBookTicket(){
//     const seat = "Aw3";
//     const name = "salman";
//     const payment = "750";
//     selectSeat(seat)
//     .then((seat)=>{
//         enterdetails(name , seat)
       
//     })
//     .then((details)=>{
//         submitPayment(name , seat , payment)

//     })

// }
// function selectSeat(seat){
//     return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('seat is confirmed', seat);
//         resolve(`confirmed ${seat}`);
        
//     }, 2000);
   

//     });
// }
// function enterdetails(name, seat){
//     return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('name binded', name, 'with', seat);
//         resolve(`confirmed ${name} ${seat}`);
        
//     }, 2000);

//     });
// }

// function submitPayment(name, seat, payment){
//     return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('name binded', name, 'with', seat , 'and' , payment);
//         resolve(`confirmed ${name} ${seat} and ${payment}` );
        
//     }, 2000);
   

//     });
// }

// railwayBookTicket();





//Async & A///wait:

//with the help of it we can make or asyncronized code to syncronized mtlb 
//agr chees ko 2 sec lag rahy hn anay mein to hm usko geldi get kr skty hein 
//with the help of astnc and await.
//await always work on promise

// async function getChees(){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('chees 🍛');
//     }, 1000);
    
//    })
// }

// async function makeDough(chees){// taking an input chees this fun
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${chees} dough 🥣`);
//         }, 2000);
//     })
// }

// async function makePizza(dough){// taking an input chees this fun
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${dough} pizza 🍕`);
//         }, 2000);
//     })
// }

// async function orderPizza(){//yahn sy hmein actual chees mily ge ku k hm ny async kr dea ha orderPizza ko ku k chees ko to 1 sec lag raha magar yahan per geldi mily ga
   
//    try{    //Ho skta ha agr promise resolve na ho koi error b 
   
//     // aaskt ha phr hm try and catch ka use krein gy

//     const chees = await getChees();//ye line jb chal jaey ge tb he next line chaly ge 
//     console.log("Now we have", chees);

//     const dough  = await makeDough(chees);// ye line tb chaly ge jb oper wala matter resolve ya reject mhi hota 
//     console.log("Now we have",dough);
//     const pizza = await makePizza(dough);
//     console.log("Now we have",pizza)
//     return pizza;

//    }
//    catch(e){
//     console.log(e);

//    }
    
// }


// orderPizza().then((pizza)=>{
//     console.log(pizza);
// });



//call back on document.body
//yahan b call back ho raha kb user click kry ga jb user phr hr function call hoga 

// document.body.addEventListener('click' , ()=>{

// })