/**
 * Jamison Bendt
 * SDI 1015
 * Conditionals Assignment
 */

var station = confirm("Is the gas station open?\n" + "Click OK for Yes, and Cancel for No.");


if(station === true) {

    var gasStation = (station === true) ? "The station is open, lets get some candy!" : "The station is closed, I guess I will wait until tomorrow.";

    console.log(gasStation);

    var budget = prompt("What is your budget for candy?");

    if (budget === "") {
        budget = prompt("Please enter a valid number.");
        console.log("Let's hope " + budget + " is enough for this delicious candy.");
    } else {
        console.log("Let's hope " + budget + " is enough for this delicious candy.");
    }
    budget = Number(budget);

    var candyBarPrice1 = prompt("What is the price of the first candy bar?");

    if (candyBarPrice1 === "") {
        candyBarPrice1 = prompt("Please enter a valid number.");
        console.log("$" + candyBarPrice1 + " for a candy bar? That is crazy.");
    } else {
        console.log("$" + candyBarPrice1 + " for a candy bar? That is crazy.");
    }
    candyBarPrice1 = Number(candyBarPrice1);

    var candyBarPrice2 = Number(prompt("What is the price of the second candy bar?"));

    if (candyBarPrice2 === "") {
        candyBarPrice2 = prompt("Please enter a valid number.");
        console.log("$" + candyBarPrice2 + " for a candy bar? That is crazy.");
    } else {
        console.log("$" + candyBarPrice2 + " for a candy bar? That is crazy.");
    }
    candyBarPrice2 = Number(candyBarPrice2);

    var salesTax = 0.06;
    var candyBarPrice1Total = (candyBarPrice1 * salesTax) + candyBarPrice1;
    var candyBarPrice2Total = (candyBarPrice2 * salesTax) + candyBarPrice2;
    var candyBarTax = (candyBarPrice1 + candyBarPrice2) * salesTax;
    var candyBarTotal = candyBarTax + candyBarPrice1 + candyBarPrice2;
    var totalPrice = (candyBarTotal * salesTax) + candyBarTotal;
    var leftOver1 = budget - candyBarPrice1Total;
    var leftOver2 = budget - candyBarPrice2Total;
    var neededAmount = candyBarTotal - (candyBarPrice1 + candyBarPrice2);
    var price = budget - totalPrice;


    if (candyBarPrice1Total <= budget || candyBarPrice2Total <= budget) {
        console.log("You have enough money for only the first candy bar with $" + leftOver1 + " left over.");
        console.log("You have enough money for only the second candy bar with $" + leftOver2 + " left over.");
    }

    if (candyBarTotal <= budget) {
        console.log("You have enough for both of the candy bars with $" + price + " left over.");
    } else {
        console.log("Sorry you don't have enough for both candy bars you were short $" + neededAmount);
    }
}