/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var jackArray = [
    "All", "work", "and", "no", "play", "makes", "Jack", "a", "dull", "boy."
];
var jack = function () {
    "use strict";
    var i;
    for (i = 0; i < jackArray.length; i = i + 1) {
        alert(jackArray[i]);
    }
};