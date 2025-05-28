// function mobiles(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const phone1 = new mobiles("oneplus", "nord ce", 25000);
// const phone2 = new mobiles("samsung", "s21", 75000);

// mobiles.prototype.showdetails = function () {
//     console.log(`the mobile is ${this.brand}and the model is ${this.model} and the price is ${this.price}`);

// };
// phone1.showdetails();
// phone2.showdetails();




function bikes(brand,model,color,price){
    this.brand=brand;
    this.model=model;
    this.color=color;
    this.price=price;

}

const bike1=new bikes("royal enfield","classic350(2017)","black",200000);
const bike2=new bikes("royal enfiled","himalyam(2025)","grey",350000);

bikes.prototype.showdetails=function(){
    console.log(`i have ${this.brand}and model is ${this.model}and the color is ${this.color} i paid ${this.price} at that time`);
    //  console.log(`my bro has ${this.brand}, and model is ${this.model} and the color is ${this.color} purchased it for ${this.price}`);


}
bike1.showdetails();
bike2.showdetails();