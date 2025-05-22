// //named function
//  function instagram(){
//     console.log("instagram is a popular social media platform")
//  }
//  instagram();

// //one more example of named function

// function welcome(){
//     console.log("Welcome to Javascript");
// }
// welcome();

// //now lets see onemore sytle
//    function supercarsdetails(){
//     let cardetails="";
//     cardetails="venky likes:"+"Rangerover";
//     console.log(cardetails);
//     return cardetails;
//    }
//    supercarsdetails();

// //lets try one more example

// function greetuser(name){
//     console.log("hey " +name+ "welcome to javascript");
// }
// greetuser("venky "); 




// //Anonymous function

// let cars=function(){
//     console.log("venkatesh fav car is Rangerover")
// };

// cars();

// //one more example on anonymous function

// let add =function(a,b){
//     console.log("sum is ",a+b)
// }
// add(5,6); //output: sum is 11



// //IIFE(Immediately Invoked Function Expression)

// (function(){
//     console.log("venky is learning javascript");
// })();


//lets do some practise on function with examples
//named functions

function welcomemessage(){
    console.log("Welcome to Javascript venkatesh");
}
welcomemessage();

// function multiply(a,b){
// return a*b;
// }
// let result=multiply(3,2);
// console.log(result);

//example2

// function add(a,b,c){
// return a+b+c;
// }
// let result=add(1,1,1);
// console.log(result);

//example3
// function cars(a, b, c){
//  return [a, b, c];
// }
//   let result=cars("swift","rangerover","mahindra");
//   console.log(result);

// function carlist(a,b,c){
//    return `availablecars:${a},${b},${c}`;
// }
// let result=carlist("swift","creta","crysta");
// console.log(result);

// function students(a,b,c){
//     return `absent students are: ${a},${b},${c}`
// }
// let student= students("ramcharan","nithin","kamalhasan");
// console.log(student);

//exaples on anonymous function

// let venky=function(){
//     console.log("hello venky how are you")

// };
// venky();

// let cars=function(){
//     console.log("my fav car is Buggati")
// };
// cars();

// let laptop=function(){
//     console.log("My laptop is working fine")
// };
// laptop();

// let multiplynum=function(a,b){
//     return a*b;
    
// };
// let result =multiplynum(2,2);
// console.log("the result is",result);

// let addnum=function(a,b){
//     return a+b;
// }
// let output=addnum(2,2)
// console.log("the result is",output);

// let mobile=function(a,b){
//     return `${a},${b}`;
// }
// let available=mobile("samsung","oneplus");
// console.log("the available phones are",available);

// let favfoods=function(a,b,c){
//     return `${a},${b},${c}`;
// }
// let foods=favfoods("idli","dosa","vegsalad");
// console.log("my fav foods are ",foods);


//examples on IIFE(immediately invoked function expression)



(function(){
    console.log("hello")
})();





(function(a,b){
 console.log(`my fav food is ${a} and ${b}`);
})("annam","pappu");


(function(a,b){
    console.log(`mobiles are:${a},${b}`);
})("oneplus","iphone");