// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");
var myButton = document.getElementById("btn");

// toppings array
var toppingArray = ["Chicken", "Pepperoni", "Cheese", "Mushrooms", "Baby Spinach", "Olives"]

// event listener
myButton.addEventListener("click", function (e) {
    e.preventDefault();

    let topping1 = document.getElementById("topping1").value;
        // var postTopping1 = document.getElementById("postTopping1");
        // postTopping1.innerHTML = topping1;

    let topping2 = document.getElementById("topping2").value;
        // var postTopping2 = document.getElementById("postTopping2");
        // postTopping2.innerHTML = topping2;

    let topping3 = document.getElementById("topping3").value;
        // var postTopping3 = document.getElementById("postTopping3");
        // postTopping3.innerHTML = topping3;

    toppingArray.push(topping1, topping2, topping3);

    calculateTotal(toppingArray) 
})


function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    let orderString = "Customer would like a(n)" + crust.value + "with" + sauce.value; // order string concatenation
    

    let toppingString = "Toppings: ";

    for(var i = 0; i < toppingArray.length; i++){
        total = toppingString + baseCost;
        //toppingString = toppingCost * toppingArray[i] + " ";
        
        if(i <= toppingString.length[i]-1){
            toppingCost * toppingArray[i];
        }
    let total = baseCost + toppingString // total = baseCost + cost of all toppings
    }}    
    
    document.getElementById("total").innerHTML += total // set DOM total += total
        var postTotal = document.getElementById("postTotal");
        postTotal.innerHTML = total;    

    document.getElementById("orderString").innterHTML += orderString // use DOM: = orderString
        var postOrderString = document.getElementById("postOrderString");
        postOrderString.innerHTML = orderString;    

    document.getElementById("toppingString").innerHTML += toppingString // use DOM: = toppingString
        var postToppingString = document.getElementById("postToppingString");
        postToppingString.innerHTML = toppingString; 

