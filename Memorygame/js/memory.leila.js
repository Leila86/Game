/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

$(function () {
    "use strict";
    var checkCards,
        collectI = [],
        collectImg = [],
        countClick = 0;
    $(".frame div").click(function () {
        var i = Number($(this).attr("id").replace("div", ""));
        $(this).css("background-image", "url(" + memory.array[i].url + ")");
        collectI.push(i);
        collectImg.push(memory.array[i]);
        for (countClick = 0; countClick < 2; countClick = countClick + 1)
    });
    if (countClick = 2) {
        checkCards();
    }
    checkCards = function (collectImg) {
        if (collectImg.indexOf(0) === collectImg.indexOf(1)) {
            console.log("ok");
        } else {
            console.log("error");
        }
    };

    function countClickReset() {
        countClick = 0;
    }
    return ?
});