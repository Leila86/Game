/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var i, answer, currentQuestion, points = 0,
    question;

game.play = function () {
    "use strict";
    alert("One day, Bowser invades and puts a spell on the Mushroom Kingdom which turned its inhabitants into blocks, weeds, and other weird things. You are the only one who can stop him by earning more points than Bowser in this battle of the minds!");
    for (i = 0; i < game.questions.length; i = i + 1) {
        currentQuestion = game.logic.getQuestions();
        answer = game.ui.askQuestion(currentQuestion);
        game.logic.isCorrect(currentQuestion, answer);
        if (currentQuestion.a.indexOf(answer) !== -1) {
            points = points + 1;
        }
    }
    if (points < 7) {
        alert("You scored " + points + ", that is bad.That is less than Bowser and the Kingdom is lost.");
    } else {
        alert("You scored " + points + ", you managed to save the Kingdom. Great job!");
    }
};