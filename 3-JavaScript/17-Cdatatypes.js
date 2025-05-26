
var carcompany={
    name:"RangeRover",
    modelyear:2025,
    segmenttypes:["sport","4*4 disel ","4*4 Manual segment","4*2 petrol "],
    countofvariants:function(){
        return "Rangerover has relased 4 variants this year"

    }


}

//here name is string and value is RangeRover and the member type is property
//now modelyear is numbers ,the value is 2025,the member type is property
//now the segmenttypes is array ,holds the values and the member type is property
//now we can see count of variants here ,it is a function and returns a string ,the member type is Method   

//now we will access the object members

document.writeln(carcompany.name);
document.writeln(carcompany.modelyear);
document.writeln(carcompany.segmenttypes);
document.writeln(carcompany.countofvariants());
console.log(carcompany.segmenttypes.length);


var schools={
    topschool:"governament high school",
    established:"2000",
    staff:50,
    town:"proddatur",
    pin:516360,
    teaches:["subjects","ncc","weekly exercising","badminton"]


}

document.writeln(schools.topschool);
//document.writeln(window.staff);
//“Only variables declared outside of any object become part of the window object in the browser.
// Properties inside an object like schools.staff belong only to that object — not to window.”

// document.writeln(this.staff);
// This is just a plain object — no function is defined inside yet.
// To use this, you typically need to use it inside a method (function) of the object.

// But this only works if you're inside a function or method."


