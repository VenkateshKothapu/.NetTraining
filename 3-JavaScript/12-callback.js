
// function buildhouse(afterbuilding){
// console.log("building the house")
// afterbuilding();
// }

// function takephoto(){
//     console.log("taking photo");
// }

// buildhouse(takephoto);


// function arrivalbus(depature){
//     console.log("the bus has arrived get in")
//     depature();
// }

// function resting(){
//     console.log("bus has stopped you can use restrooms if needed");

// }

// arrivalbus(resting);


// function coffeshop(cofferrived){
//     console.log("orderd the coffe and recived after 5 min");
// cofferrived();
// }
// function bill(){
//     console.log("paid the bill and went home");
// }
// coffeshop(bill);




// function foodorder(payfororder){
//     console.log("orderd the food from Zomato")
//     payfororder();
// }

// function recivedorder(){
//     console.log("recived the order and its so fresh")
// }

// foodorder(recivedorder);



// function buildcar(sellcar){
//     console.log("we are building a new car this year")
//     sellcar();
// }

// function sellcar(){
//     console.log("and we are quoted our car for 8 lakhs")

// }
// buildcar(sellcar);


// function myname(){
//     console.log("my name is venkatesh");
// }

// setTimeout(myname,2000);


// function bikes(){
//     console.log("i like Royal enfield")

// }achim

// function cars(callback){
//     callback();

//     console.log("i like cars as well")
// }
// cars(bikes);
//-------------------------------------------------------------------

// function messageone(){
//     console.log("hey call me when you are done");

// }
// function messagetwo(info){
//     info();
//     console.log("this is message two");
// }

// messagetwo(messageone); 


// function boilwater(){
//     console.log("boiling water to make tea");

// }
// function addtealeafs(making){
//     making()
//     console.log("added tea leaf in boling water")

// }
//  function ready(){
//     console.log("tea is ready come lets have")
//  }
//  addtealeafs(boilwater);
//  ready();

//------------------------------------------------------------------------------------------

// function boilwater(nextstep) {
//     console.log("water is boiling for tea")
//     nextstep();
// };

// function addtealeafs(nextstep2) {
//     console.log("add tea leafs")
//     nextstep2();
// };



// function teaisready() {
//     console.log("tea is ready to serve")
// }

// boilwater(function () {
//     addtealeafs(function () {
//         teaisready();
//     });

// });

//----------------------------------------------------------------
// function morning(nextstep) {
//     console.log("wake up its morning and fresh up")
//     nextstep();
// }

// function breakfast(nextstep2) {
//     console.log("have some breakfast and ")
//     nextstep2();
// }

// function school() {
//     console.log("go to school")
// }

// // morning(function(){
// //     brekfast(function () {
// //         school(); 

// //     });
// // });

// morning(function(){
//     breakfast(school)
// });

function havebreakfast(next){
    console.log("have some breakfast its on the dinning table ")
    next();

}

function packyourbag(nextstep){
    console.log("pack your bag neatly make sure to keep your books");
    nextstep()
}

function gotoschool(){
    console.log("go to school after you are ready");
}

havebreakfast(function(){
    packyourbag(gotoschool);
})