/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
game.logic = {};

game.logic.isCorrect = function (answer, question) {
    "use strict";
    if (answer !== (-1)) {
        game.ui.showCorrect();
    } else {
        game.ui.showWrong();
    }
    return (answer === question.a);
};
game.logic.getQuestions = function (level) {
    "use strict";
    return game.questions[level].pop();
};