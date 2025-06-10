// Synchronous Example (no delay)

// function taskOne() {
//     console.log("Task 1 done");
// }

// function taskTwo() {
//     console.log("Task 2 done");
// }

// taskOne();
// taskTwo();

//------------------------------------------------------------


// //Asynchronous with setTimeout (simulate delay)

// function taskone(){
//     setTimeout(function(){
//         console.log("task one is done")
        
//     },4000);
// }

// function tasktwo(){
//     console.log("task two is done");
// }

// taskone();
// tasktwo();

// //output
// // Task 2 done
// // Task 1 done  ← (comes late after 2 seconds)


//----------------------------------------

// function taskone(donecallback){
//     setTimeout(function(){
//         console.log("taskone is done")
//         donecallback();
//     },4000)
// }
// function tasktwo(){
//     console.log("tasktwo is done")

// }
// taskone(tasktwo);

// controlling the order using a callback
//---------------------------------------------------------------------------------------------

//example Making Tea (Callback Style)

function boilwater(nextstep){
    setTimeout(()=>{
        console.log("boiling water to make tea");
        nextstep();
    },1000);
}

function addtealeafs(nextstep2){
    setTimeout(()=>{
        console.log("after boiling tea leafs were added");
        nextstep2()
    },2000);
}

function servetea(){
    console.log("tea is ready to serve")
}

boilwater(()=>{
    addtealeafs(()=>{
        servetea();
    });
});