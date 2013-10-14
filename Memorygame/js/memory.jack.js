/*jslint browser:true */
/*global $:false, memory:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var i = 0,
    jack, jackArray = ["A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y."];


memory.jack = function () {
    "use strict";
    $("h1").text("GameOver");
    //$(".jack").show();
    setTimeout(function () {
        $("p").text($("p").text() + jackArray[i]);
        i = i + 1;
        memory.jack();
    }, 200);

    $(".bricks").css("background-image", "url(images/jack.jpg)");
};