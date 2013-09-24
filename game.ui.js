/*jslint browser:true */
/*global game:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
game.ui = {};
game.ui.askQuestion = function (question) {
    "use strict";
    return prompt(question.q);
};
game.ui.showWrong = function () {
    "use strict";
    alert("WRONG!");
};
game.ui.showCorrect = function () {
    "use strict";
    alert("You made it.");
};