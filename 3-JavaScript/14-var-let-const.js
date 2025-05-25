// function colors(){
//     let favcolor = "blue"
//     console.log("my fav color is "+ favcolor);

// }
// colors();
// let model= "Nord"
// function mobiles(){
//     console.log("my mobile is oneplus and the model is "+ model)

// }
// mobiles();



// var car="Swift"
// {
//     console.log("My car is "+car);
// }


var greenColor = "green";
//This is a global variable

// It’s available everywhere in the file
{
   console.log("LocalBlock-1", greenColor); // ✅ green
   let blueColor = "blue";                  // declared only inside this block
   console.log("LocalBlock-1", blueColor);  // ✅ blue
}


var phones='android phones'
function mobiles(){
    console.log(phones+" booming now a days");
}
mobiles();

{
    let fruit1='mango';
    {
        let fruit2="grapes";
        {
            let fruit3="orange";
            console.log("i like "+fruit1);
            console.log("i like "+fruit2);
            console.log("i like "+fruit3); }
        

        console.log('im eating'+fruit1);
        console.log("im eating "+fruit2);
        console.log("im eating "+fruit3);

    }
    console.log("i will have "+fruit1);
     console.log("i will have "+fruit2)
     console.log("i will have "+fruit3)
    
}
