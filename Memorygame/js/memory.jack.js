/*jslint browser:true */
/*global $:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var i, jack, jackArray = ["A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y."];


jack = function () {
    "use strict";
    for (i = 0; i < jackArray.length; i = i + 1) {
        $("#jack").show(jackArray[i]);
    }
    setTimeout(function () {
        $("#jack").hide();
    }, 10000);
};

/*
$("#correctAnswer").show();
            setTimeout(function () {
                $("#correctAnswer").hide();
            }, 1000);
$("#jack").text(jackArray[i]).text;

jQuery.fx.interval = 100;
$( "input" ).click(function() {
  $( "div" ).toggle( 3000 );
});*/