/*jslint browser:true */
/*global game:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

game.questions = [
    [{
        q: "What is 10 * 0?",
        a: [0]
    }, {
        q: "Which word in the dictionary is always spelled wrong?",
        a: ["wrong", "Wrong"]
    }, {
        q: "I can be caught but not thrown, what am I?",
        a: ["cold", "Cold"]
    }, {
        q: "Johnny Depp and Vanessa Paradis are still a couple, true or false?",
        a: [false] // Boss fråga t Level 2
    }],
    [{
        q: "I can travel the world without leaving my corner. What am I?",
        a: ["stamp", "a stamp", "Stamp"]
    }, {
        q: "I am an odd number, take away a letter and I become even. What am I?",
        a: ["seven", "Seven", 7]
    }, {
        q: "What is PI:s three first number?",
        a: [314, 3.14]
    }, {
        q: "An obsession with actress Jodie Foster led to the shooting of President Ronald Reagan in 1981. True or false?",
        a: [true] // Boss fråga t Level 3
    }],
    [{
        q: "What is the name of the princess in Super Mario?",
        a: ["Peach", "peach"]
    }, {
        q: "What is the meaning of life according to 'The Hitchhiker's Guide to the Galaxy'?",
        a: [42]
    }, {
        q: "List all the clubs where Zlatan have played, in chronological order, example: Name, Name XX, Name etc. ",
        a: ["Malmö FF, Ajax, Juventus, Inter, Barcelona FC, Milan, Paris Saint-Germain"]

    }, {
        q: "What does 01001001 00100000 01110111 01101001 01101110 say binary?",
        a: ["I win"]
    }]
];

/* alert("One day, Bowser invades and puts a spell on the Mushroom Kingdom which turned its inhabitants into blocks, weeds, and other objects. You are the only one who can stop him by saving the prince, who is the only one who can break the spell.");

var i, answer1, answer2, answer3, answer4, que1, que2, que3, que4;
i = 0;

while (i < 3) {
    answer1 = prompt("Do you choose to take on this battle of the minds?");
    if (answer1 === "yes") {
        alert("Welcome to this epic adventure!");
        break;
    } else {
        alert("Game over, you have failed the Kingdom!");
    }
    i = i + 1;
}
while (i < 3) {
    answer2 = prompt("What is 10 * 0?");
    answer2 = Number(answer2);
    if (answer2 === 0) {
        alert("You passed the first level, lets see if you can continue with this winning streak.");
        break;
    } else {
        alert("Too bad!");
    }
    i = i + 1;
}
while (i < 3) {
    answer3 = prompt("Which word in the dictionary is always spelled wrong?");
    if (answer3 === "wrong") {
        alert("You passed yet another level, lets see if you can handle the next one! Mohahahaa...");
        break;
    } else {
        alert("You failed your prince!");
    }
    i = i + 1;
}
while (i < 3) {
    answer4 = prompt("I can be caught but not thrown, what am I?");
    if (answer4 === "cold") {
        alert("Woohoo, you beat the mighty Bowser, you now have the prince and are the new master of minds!");
        break;
    } else {
        alert("Bowser is eating you alive...");
    }
    i = i + 1;
}
console.log("You are now having beer with the Prince at the royal local pub. \n THE END ");
*/