/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    var currentCard = 0;


    $(".frame div").click(function () {
        var i = Number($(this).attr("id").replace("div", ""));
        $(this).css("background-image", "url(" + memory.array[i] + ")");
        //console.log(memory.array[i]);
    });

});