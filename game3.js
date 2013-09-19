/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var question1 = "Do you choose to take on this battle of the minds?";
var answer1 = "yes";

var question2 = "What is 10 * 0?";
var answer2 = "0";

var question3 = "Which word in the dictionary is always spelled wrong?";
var answer3 = "wrong";

var question4 = "I can been caught but not thrown, what am i?";
var answer4 = "cold";


alert("One day, Bowser invades the Mushroom Kingdom. You are the only one who can stop him by saving the prince from the dungeon in Moria.");

function askQuestion1(question1) {
    "use strict";
    var answer;
    do {
        answer = (prompt(question1));
    }
    while (answer !== (answe1));
    return answer;
}

/*    result = 0,
    i,
    answer,
    currentQuestion;

function askQuestion(question) {
    "use strict";
    var answer;
    do {
        answer = Number(prompt(question.q));
    } while (isNaN(answer));
    return answer;
}

function checkAnswer(answer, question) {
    "use strict";
    if (answer === question.a) {
        alert("Correct");
        result = result + 1;
    } else {
        alert("Sorry, the correct answer was " + question.a);
    }
    function showResult() {
    "use strict";
    alert("Well done you scored " + result + " points");
}
questions = _.shuffle(questions);
for (i = 0; i < 3; i = i + 1) {
    currentQuestion = questions.pop();
    answer = askQuestion(currentQuestion);
    checkAnswer(answer, currentQuestion);
}
}*/