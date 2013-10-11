/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

$(function () {

    "use strict";
    var card1,
        div2,
        card2,
        div1,
        countClick = 0,
        points = 0;

    $(".frame div").click(function () {
        var i = Number($(this).attr("id").replace("div", "")); // Här får vi ut vilket nummer Div:en som vi klickat på har. 
        $(this).css("background-image", "url(" + memory.array[i].url + ")"); // Här tilldelar vi den diven en bild från bild arrayen. Bilden har samma indexnummer som diven. 
        if (countClick === 0) {
            countClick = countClick + 1;
            div1 = $(this);
            card1 = memory.array[i].url;
            if (card1 === "images/jack.jpg") {
                memory.jack();
            }
            //return card1 && div1;
        } else {
            countClick = countClick + 1;
            div2 = $(this);
            card2 = memory.array[i].url;
            if (card2 === "images/jack.jpg") {
                memory.jack();
            }
            if (card1 !== card2) {
                setTimeout(function () {
                    div1.css("background-image", "url(../images/monster.jpg)");
                    div2.css("background-image", "url(../images/monster.jpg)");
                }, 2000);
                countClick = 0;
                //card2 = 0;
                //card1 = 0;
            }
        }
    });

    /*

1) När man click första gång spara kortets image url till variable card1.
2) När man click andra gången
     2a)  spara kortets image url till variable card2.
     2b) gemföra card1 and card2
     2c) om annurlunder visa baksidan av kort igen
     2d) noll ställ klickräknare så nästa klick bli tolkad som klick 1 igen.


*/

});