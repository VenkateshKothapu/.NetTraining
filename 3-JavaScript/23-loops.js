//now we are practising for loop

// for (let i=1;i<=5;i++){
//     console.log("hello");

// }



// for (let i = 1; i <= 5;i++){
//     console.log(i);
// }

// for (q=1;q<=12;q++){
//     console.log(q);
// }

// for(i=1;i<=5;i++){
//     console.log(i);
// }

//now we will take the real world example for for loop
//--printing student roll number from 1 to 10.

// for(let number=1;number<=10;number++){
//     console.log("roll number"+number);
// }


//-------------------while loop----------------------------------------->>

// let i=1;
// while(i<=10){


// console.log(i);
// i++;}

// let phones=1;
// while(phones<=15){
//     console.log("there is phone in box"+phones);
//     phones++;
// }

//example-2

// let i=1;
// while(i<=10){
//     console.log("number "+i);
//     i++;
// }

//example-3 to print odd numbers.
// let i=1;
// while(i<=15){
//     if(i%2 !=0){


//     console.log("printing odd number"+i);}
//     i++;

//     }


// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }   


// let hey=10;
// while(hey>=100){
//     console.log("hey hello this is your ticket"+ hey);
//     i++;
// }


// for(let step=0; step<5; step=step+1){
//     console.log(`${step} times executed`);
//    }


// for (var number = 1; number <= 5; number = number + 1) {
//     console.log(`i have watched the movie ${number+1} times`);

// }

//example--- for loop---booklist---

// var booklist=[
//     {bookposition:1,bookname:"english"},     //0
//     {bookposition:2,bookname :"maths" },     //1
//     {bookposition:3,bookname: "science"},    //2
//     {bookposition:4,bookname:"socail"},      //3
//     {bookposition:5,bookname:"telugu"},      //4
//     {bookposition:6,bookname:"hindi" }       //5

// ]   


//what i want to print here is the total book list

// for(var bookposition=0;bookposition < booklist.length;bookposition=bookposition+1){
//     console.log(booklist[bookposition]);
// }


//one more example on for loop

// var studentsdata=[
//     {rollnumber:1,studentname:"john wick",marks:80},
//     {rollnumber:2,studentname:"brad pitt",marks:90},
//     {rollnumber:3,studentname:"venky",marks:100},
//     {rollnumber:4,studentname:"eldecaprio",marks:95},
//     {rollnumber:5,studentname:"varma",marks:100}
// ]

// for (var i=0;i<studentsdata.length;i++){
//     console.log(studentsdata[i]);
// }


//while loop 

// var studentsdata = [
//     { rollnumber: 1, studentname: "john wick", marks: 80 },
//     { rollnumber: 2, studentname: "brad pitt", marks: 90 },
//     { rollnumber: 3, studentname: "venky", marks: 100 },
//     { rollnumber: 4, studentname: "eldecaprio", marks: 95 },
//     { rollnumber: 5, studentname: "varma", marks: 100 }
// ]

// i=0;
// while(i<studentsdata.length){
// console.log(studentsdata[i]);
// i++;
// }
//one more example to find students who got 100 marks same array object but we change condititon now

// i = 0;
// while (i < studentsdata.length) {
//     if (studentsdata[i].marks > 90)
//     console.log(studentsdata[i]);
//     i++;
// }

//now we will print the names who got 100 marks

// i=0;
// while(i<studentsdata.length){
//     if(studentsdata[i].marks>95)
//         console.log(studentsdata[i].studentname+"-"+studentsdata[i].marks);
//     i++;
// }


//do while loop

// var i=10;
// do
// {
//     console.log("print this at least once i=",i);
//     i++;
// }while(i<5);


//now one more example-
//we are printing all studnets names using do while loop
// var studentsdata = [
//     { rollnumber: 1, studentname: "john wick", marks: 80 },
//     { rollnumber: 2, studentname: "brad pitt", marks: 90 },
//     { rollnumber: 3, studentname: "venky", marks: 100 },
//     { rollnumber: 4, studentname: "eldecaprio", marks: 95 },
//     { rollnumber: 5, studentname: "varma", marks: 100 }
// ]
// var i=0;
// do {
//     console.log(studentsdata[i].studentname);
//     i++;
// }
// while(i<studentsdata.length);

//-------------------------------------------

//now we are discussing about (for of )

// var fruits=["apple","mango","berry"]
// for(let fruit of fruits){
//     console.log(fruit);
// }

// const numbers=[30,400,50,60,99,111,235];
// for(let values of numbers){
//     console.log(values);
// }

// var string="javascript"
// for(let print of string){
//     console.log(print)
// }
// // ---------------------------------------------------------------------------------------------

//now for in

// var data={
//     name:"venky",
//     age:20,
//     qualification:"btech"
// };

// for(let info in data){
//     console.log(info+":"+data[info]);
// }


//array 

var phone=["virtue","oneplus","samsung"];
for(let phonedetails in phone){
    console.log(phonedetails+":"+phone[phonedetails]);
}


