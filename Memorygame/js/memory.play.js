/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */


$(function () {

    "use strict";
    var card1,
        div2,
        card2,
        div1,
        countClick = 0,
        points = 0,
        canIclick = true,
        hideWrongAnswer = function (div1, div2) {
            setTimeout(function () {
                div1.css("background-image", "url(images/monster.jpg)");
                div2.css("background-image", "url(images/monster.jpg)");
                canIclick = true;
            }, 1500);
        };
    $("p").text("Points: " + points);
    $(".frame div").click(function () {
        if (canIclick) {
            var i = Number($(this).attr("id").replace("div", "")); // Här får vi ut vilket nummer Div:en som vi klickat på har. 
            $(this).css("background-image", "url(" + memory.array[i].url + ")"); // Här tilldelar vi den diven en bild från bild arrayen. Bilden har samma indexnummer som diven. 
            if (countClick === 0) {
                countClick = countClick + 1;
                div1 = $(this);
                card1 = memory.array[i].url;
                if (card1 === "images/jack.jpg") {
                    memory.jack();
                }
            } else {
                div2 = $(this);
                card2 = memory.array[i].url;
                if (card2 === "images/jack.jpg") {
                    memory.jack();
                }
                if (card1 !== card2) {
                    canIclick = false;
                    hideWrongAnswer(div1, div2);

                } else {
                    points = points + 1;
                    $("p").text("Points " + points);
                    div1.css("background-image", "card1");
                    div2.css("background-image", "card2");
                }
                countClick = 0;
            }
        }
    });

});