/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
game.play = function () {
    "use strict";
    var i, answer, currentQuestion,
        points = 0;
    /* questions = game.logic.getQuestions();*/
    for (i = 0; i < 3; i = i + 1) {
        currentQuestion = game.logic.getQuestions(); // questions.pop();
        answer = game.logic.askQuestion(currentQuestion);
        if (game.logic.checkAnswer(answer, currentQuestion)) {
            points = points + 1;
        }
        game.ui.showResult(points);
    }
};