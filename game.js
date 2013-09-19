/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

alert("One day, Bowser invades the Mushroom Kingdom. You are the only one who can stop him by saving the prince from the dungeon in Moria.");
var que1 = prompt("Do you choose to take on this battle of the minds?");
if (que1 === "yes" || que1 === "ja") {
    alert("Welcome to this epic adventure!");
} else {
    alert("Game over; you are such a loser!");
}
var que2 = prompt("What is 10 * 0?");
if (que2 === "0") {
    alert("You passed the first level, lets see if you can continue with this winning streak.");
} else {
    alert("You failed");
}
var que3 = prompt("Which word in the dictionary is always spelled wrong?");
if (que3 === "wrong" || que3 === "Wrong") {
    alert("You passed yet another level, lets see if you can handle the next one! Mohahahaa...");
} else {
    alert("You failed");
}
var que4 = prompt("I can been caught but not thrown, what am i?");
if (que4 === "cold" || que4 === "Cold") {
    alert("Oh no, you beat the mighty Bowser, you now have the prince, and are the ruler of minds!");
} else {
    alert("Bowser is eatin you alive... ");
}