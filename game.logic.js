/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

game.logic = {};
var answer, currentQuestion;
game.logic.isCorrect = function (currentQuestion, answer) {
    "use strict";
    if (currentQuestion.a.indexOf(answer) !== -1) {
        game.ui.showCorrect();
    } else {
        game.ui.showWrong();
    }
};

game.logic.getQuestions = function () {
    "use strict";
    return game.questions.shift();
};