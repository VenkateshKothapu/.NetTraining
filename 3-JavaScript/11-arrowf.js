//Arrow function

//here we compare normal function vs arrow function

// function greet(){
//     console.log("hello")
// }
// greet();

//now we will see how a arrow function can be done in normal function
//we declare a variable first to assign that variable to that arrow function
//then we call that function at last to see the output as below

//  let greet=()=>{
//     console.log("hey hello how are you");
// };

// greet();

// let food=()=>{
//     console.log("hey my fav food is VEG DIET FOOD");

// };
// food(); 
//-------------------

//now we will see how can we implement arrow in anonymous function

// let cars=function(){
// console.log("ferrari");
// }
// cars();

// let bikes= function(name){
//     return "i like " + name;
// };
// console.log(bikes("kawasaki"));
//now we will see the arrow function in anonymous function
//small changes here nothing to worry
// let places=(name)=>{
//     return "i like " + name;

// };
// console.log(places("bombay"));

// var laptops=(rating)=>{
//     return "my laptop is so good i rate it 9 out of " +rating;

// }
// console.log(laptops(10));


// let states=(fav)=>{
//  return "i like some places they are  " + fav;

// }

// console.log(states("hyderabad,bombay,bengaluru"));

//we can write more simple way

// let states = fav => "I like some places they are " + fav;

// console.log(states("hyderabad, bombay, bengaluru"));
 
// let resturant= fav => "i like chinese resturant particularly " +fav;

// console.log(resturant("chinese wook"));

//Using template literals (${}) makes your strings more readable and powerful.

// let favmovies= movies=>`My fav movies are:${movies}`
// console.log(favmovies("Blood Diamond, "+"wolf of wall street, "+"interstellar"));

// let addnumbers=(a,b,c)=>`the sum of three:${a+b+c}`
// console.log(addnumbers(20,25,30));

// let subofnum=(a,b)=>`the sub of two num :${a-b}`
// console.log(subofnum(5,4));
//now we will see how to use arrow function in IIFE
//IIFE MEANS Immediately invoked function expression


//now arrow in IIFE

// ((bag)=>{
// console.log(`i need one: ${bag}`)
// })("Travelling bag");



((a,b)=>{
    console.log(`the result for multiplying two ${a*b}`);
})(4,5);


