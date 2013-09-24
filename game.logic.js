/*jslint browser:true */
/*global game: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
game.logic.askQuestion = function (question) {
    "use strict";
    var answer;
    do {
        answer = (game.ui.askQuestion(question));
    } while (Number(answer) || boolean(answer) || answer);
    return answer;
};
game.logic.checkAnswer = function (answer, question) {
    "use strict";
    if (answer === question.a) {
        game.ui.showCorrect();
    } else {
        game.ui.showWrong(question);
    }
    return (answer === question.a);
};
game.logic.getQuestions = function () {
    "use strict";
    return _.shuffle(game.questions);
};*/