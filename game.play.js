/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var i, answer, currentQuestion, question;
game.play = function () {
    "use strict";
    for (i = 0; i < 10; i = i + 1) {
        currentQuestion = game.logic.getQuestions();
        answer = game.ui.askQuestion(currentQuestion);
        game.logic.isCorrect(currentQuestion, answer);
    }
};


/*    var i, answer, currentQuestion;
    for (i = 0; i < 12; i = i + 1) {
        currentQuestion = game.logic.getQuestions();
        answer = game.ui.askQuestion(currentQuestion);
        answer = game.logic.isCorrect;
    }
};
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