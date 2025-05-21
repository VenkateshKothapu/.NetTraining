//we can prepare function within the function
//console.log("Hi how are you");
//console.log("hey Good morning")
//console.log('whats the update')
//console.log('can i call you back in hour')
//this "%c" is used when we are adding colour to text
//console.log("%c good morning","color:green");
//console.log("%c i like to buy a landrover","color:royalblue");
//console.log("%c Be on track","color:green;background-color:white");
//console.log("%c my mom is a top chef she cooks very well","color:green;background-color:red");
//console.log("%c progress is good","color:yellow;background-color:black");
//console.log("%c Hey how are you","color:green;background-color:yellow");

// function---- is used for specific task

function backgroundcolororange(){
    console.log("%c   ","background-color:orange");
}
//backgroundcolororange();

function redcolor(){
    console.log("%c   ","background-color:red");
}
//redcolor();

function firstselection(){
    console.log("%c   ","background-color:purple");
    console.log("%c   ","background-color:grey");
    redcolor();
}
firstselection();

function secondselection(){
    console.log("%c   ","background-color:yellow");
    console.log("%c   ","background-color:black");
    backgroundcolororange();
}
secondselection();

function thirdselection(){
    console.log("%c   ","background-color:green")
    console.log("%c   ","background-color:grey")
    redcolor();
}
thirdselection();

//do