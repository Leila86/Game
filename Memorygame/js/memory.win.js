/*jslint browser:true */
/*global memory:false, $:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var audio, playSound;
memory.win = function () {
    "use strict";
    $("h1").text("Winner!");
    $(".bricks").css("background-image", "url(images/cute.jpg)");
    /*audio = $("audio")[0];
    playSound = function () {
        audio.load();
        audio.play();
    };
    $("h1").click(playSound);*/
};