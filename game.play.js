/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
game.play = function () {
    "use strict";
    var i, answer, currentQuestion,
        level = 0;
    for (i = 0; i < 4; i = i + 1) {
        currentQuestion = game.logic.getQuestionsp(); // questions.pop();
        answer = game.logic.askQuestion(currentQuestion);
        if (game.logic.isCorrect(answer, currentQuestion));
    } {
        level + 1;
    };
};
/* questions = game.logic.getQuestions();*/
//Anropa frågan härifrån!
// Get question = level 0 + 1