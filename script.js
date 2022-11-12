// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");

// toppings array
var toppingArray = ["Chicken", "Pepperoni", "Cheese", "Mushrooms", "Baby Spinach", "Olives"]

// event listener
myButton.addEventListener("click", function (e) {
    e.preventDefault();

    let topping1 = document.getElementById("topping1").value;
        var postTopping1 = document.getElementById("postTopping1");
        postTopping1.innerHTML = topping1;

    let topping2 = document.getElementById("topping2").value;
        var postTopping2 = document.getElementById("postTopping2");
        postTopping2.innerHTML = topping2;

    let topping3 = document.getElementById("topping3").value;
        var postTopping3 = document.getElementById("postTopping3");
        postTopping3.innerHTML = topping3;

    toppingArray.push(topping1, topping2, topping3);

    calculateTotal(toppingArray) //toppingArray or toppings??
})


function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    let orderString = "Customer would like a(n)" + crust.value + "with" + sauce.value; // order string concatenation
    

    let toppingString = "Toppings: ";

    for(var i = 0; i < toppingArray.length; i++){
        var toppingTotal = toppingCost + baseCost;
        if(i <= toppingArray.length[i]-1){

        }
    }
    // let total = baseCost.value + toppingTotal.value // total = baseCost + cost of all toppings

    // set DOM total += total   
    // use DOM: = orderString   
    // use DOM: = toppingString 
}