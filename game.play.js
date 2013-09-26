/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var level = 0;
game.play = function (level) {
    "use strict";
    var i, answer, currentQuestion;
    for (i = 0; i < 4; i = i + 1) {
        currentQuestion = game.logic.getQuestions();
        answer = game.ui.askQuestion(currentQuestion);
        game.logic.isCorrect(answer, currentQuestion);
    }
    level + 1;
};

/* triv.play = function () {
    "use strict";
    var i, answer, currentQuestion,
        points = 0;
    for (i = 0; i < 3; i = i + 1) {
        currentQuestion = triv.logic.getQuestion();
        answer = triv.logic.askQuestion(currentQuestion);
        if (triv.logic.checkAnswer(answer, currentQuestion)) {
            points = points + 1;
        }
    }
    triv.ui.showResult(points);
};questions = game.logic.getQuestions();*/
//Anropa frågan härifrån!
// Get question = level 0 + 1