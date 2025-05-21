//named function
 function instagram(){
    console.log("instagram is a popular social media platform")
 }
 instagram();

//one more example of named function

function welcome(){
    console.log("Welcome to Javascript");
}
welcome();

//now lets see onemore sytle
   function supercarsdetails(){
    let cardetails="";
    cardetails="venky likes:"+"Rangerover";
    console.log(cardetails);
    return cardetails;
   }
   supercarsdetails();

//lets try one more example

function greetuser(name){
    console.log("hey " +name+ "welcome to javascript");
}
greetuser("venky "); 




//Anonymous function

let cars=function(){
    console.log("venkatesh fav car is Rangerover")
};

cars();

//one more example on anonymous function

let add =function(a,b){
    console.log("sum is ",a+b)
}
add(5,6); //output: sum is 11



//IIFE(Immediately Invoked Function Expression)

(function(){
    console.log("venky is learning javascript");
})();

//hello