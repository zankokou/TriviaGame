
var audSanctuary = document.getElementById("sanctuaryAud");
audSanctuary.volume = 0.2;


$(document).ready(function(){
    $('.questionsBox').hide();
    $('#timeLeft').hide();
    $('.scoreBoard').hide();
    // $('.restart').hide();
});

$('.startButton').click(function(){
    $('.questionsBox').show();
    $('.startButton').hide();
    $('#timeLeft').show();
    audSanctuary.play();

    startTimer();

    console.log(score);
    console.log(wrong);
    console.log(unanswered);
});

var timeOn = false;
var time = 60;

function startTimer(){
    timeOn = true;

    if (timeOn == true){
    var interValId = setInterval(function(){
            time --;
            $('#timeLeft').html("Time Left: " + time + " Seconds");

            if (time === 0){
                timeOn = false;
                clearInterval(interValId);
                submitAnswers();
                swap();
            }
        }, 1000);
    }
}

var total = 8;
var score = 0;
var wrong = 0;
var unanswered = 0;

function submitAnswers(){
    score = 0;
    wrong = 0;
    unanswered = 0;

    //get User Input
    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;
    var q7 = document.forms['quiz']['q7'].value;
    var q8 = document.forms['quiz']['q8'].value;
    // var q9 = document.forms['quiz']['q9'].value;
    // var q10 = document.forms['quiz']['q10'].value;



    //Set Correct Answers
    var answers = ['a','c','c','d','b','c','b','c'];

    // Check Answers
    for (j = 1; j <= total; j++){
        if(eval('q'+ j) == answers[j - 1]){
            score++;
        }

        else if(eval('q' + j) == null || eval('q' + j) == ""){
            unanswered++;
        }

        else if(eval('q' + j) != answers[j-1]){
            wrong++
        }
    }
    return false;



};

$('.submitButton').click(function(){
    submitAnswers();
    swap();
});

$('.restart').click(function(){
    location.reload();   
});

function swap(){
    $('.questions').hide();
    $('.scoreBoard').show();

    $('#timeLeft').remove();
    $('#done').html("All Done!");
    $('#correct').html("Correct Answers: " + score);
    $('#wrong').html("Wrong Answers: " + wrong);
    $('#unanswered').html("Unanswerd: " + unanswered);
    // $('.restart').show();
}