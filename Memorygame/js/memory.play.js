/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

$(function () {

    "use strict";
    var checkCards,
        card1,
        card2,
        collectI = [],
        collectImg = [],
        countClick = 0,
        points = 0;

    $(".frame div").click(function () {
        var i = Number($(this).attr("id").replace("div", "")); // Här får vi ut vilket nummer Div:en som vi klickat på har. 
        $(this).css("background-image", "url(" + memory.array[i].url + ")"); // Här tilldelar vi den diven en bild från bild arrayen. Bilden har samma indexnummer som diven. 
        countClick = countClick + 1;
        collectI.push(i); // Vi sparar vilka divs i:n som vi klickat på i en  array utanför klick-funktionen.
        collectImg.push(memory.array[i].n); //Sparar vilka nummer som bilden har i array utanför klick-funktionen.
    });

    //Hit fungerar allt bra!

    checkCards = function (collectImg, collectI) {
        card1 = ("div" + collectI[0].toString);
        card2 = ("div" + collectI[1].toString);
        if ((countClick === 2) && (collectImg[0] === collectImg[1])) {
            points = points + 1;
        } else {
            $(card2, card1).css("background-image", "images/monster.jpg");
        }
    };
    /*
Tanken med funktionen ovan är att vi ska kolla om collectImg:s index 0 och 1 är samma,
det innebär att de är ett par och ska fortsätta vara öppna. 
Vi lade även in countClick i denna funktion, men jag vet inte om den kommer finnas kvar här,
eller kanske bli en egen. 

Problemet är att det inte fungerar när jag provkör i console. 
Och js-lint klagar på att checkCards är oanvänt, vilket den ju inte är?


Om jag kan få lite tips på varför det inte vill sig så är jag tacksam, och 
hur jag ska kunna testa det i consolen. 


*/

});



/*
$(function () {
    "use strict";
    var points = 0,
        checkAnswer, writeQuestion, correctAnswer,
        questions = [{
            html: "What is the longest river in the world is called?",
            answers: ["Nile", "Amazon", "Thames"],
            correctAnswer: "Nile"
        }, {
            html: "What is the highest mountain in the world called?",
            answers: ["Everest", "Mount Blanc", "Snowden"],
            correctAnswer: "Everest"
        }, {
            html: "The longest road in the world is approximately how long?",
            answers: ["20000km", "2000km", "8000km"],
            correctAnswer: "8000km"
        }, {
            html: "Which country grows the most coffee",
            answers: ["Sweden", "Brazil", "France"],
            correctAnswer: "Brazil"
        }, {
            html: "Which sea or ocean does the river Jordan run into?",
            answers: ["Pacific", "Atlantic", "Dead Sea"],
            correctAnswer: "Atlantic"
        }],
        currentQuestionIndex = 0;
    
    writeQuestion = function () {
        $("#questionCount").text(questions.length);

        $("#questionNumber").text(currentQuestionIndex);
        
        $("#questionText").text(questions[currentQuestionIndex].html);
        
        $("#buttonA").text(questions[currentQuestionIndex].answers[0]);
        $("#buttonB").text(questions[currentQuestionIndex].answers[1]);
        $("#buttonC").text(questions[currentQuestionIndex].answers[2]);

        correctAnswer = questions[currentQuestionIndex].correctAnswer;
    };
    checkAnswer = function (selectedAnswer) {
        var moveToNextQuestion = function () {
            currentQuestionIndex = currentQuestionIndex + 1;

            $("#result").text("You got " + points + " points!");

            if (currentQuestionIndex < questions.length) {
                writeQuestion();
            } else {
                $("#result").show();
                setTimeout(function () {
                    $("#result").hide();
                }, 10000);
                currentQuestionIndex = 0;
                writeQuestion();
            }
        };

    
        if (selectedAnswer === correctAnswer) {
            points = points + 1;
            $("#correctAnswer").show();
            setTimeout(function () {
                $("#correctAnswer").hide();
            }, 1000);
            moveToNextQuestion();
        } else {
            $("#wrongAnswer").show();
            setTimeout(function () {
                $("#wrongAnswer").hide();
            }, 1000);
            moveToNextQuestion();
        }

    };


    writeQuestion();
    $("#buttons div").click(function () {
        checkAnswer($(this).text());
    });

});*/