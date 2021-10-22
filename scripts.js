var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var score = 0;
var answerLog = [];
var questionIndex = 0;
var timeLeft = 15;
var timeInterval;



var questions = [
    { q: "What does 'for' do in javaScript?", correct: "It loops through a function.", wrongA: "it insterts HTML.", wrongB: "it does nothing. ", wrongC: "it displays in the console" },
    { q: "Inside which HTML element do we put the JavaScript?", correct: "<script>", wrongA: "<javascript>", wrongB: "<js>", wrongC: "<scripting>" },
    { q: "What does HTML stand for?", correct: "Hyper Text Markup Language", wrongA: "Home tool Markup Language", wrongB: "HyperLinks and text markup language", wrongC: "Hype tone manuel language" },
    { q: "What does CSS Stand for?", correct: "Casscading styling sheet", wrongA: "Cake so small", wrongB: "", wrongC: "" }
];



function countdown() {
    timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "secounds remaining";

            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + "secounds remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Game Over" + "your score is = " + score;
            var enterName = document.createElement('input')
            enterName.textContent = ""
            clearInterval(timeInterval);
        }
    }, 1000);



    gameQuestions();
};

console.log(countdown);
startBtn.onclick = countdown;

function gameQuestions() {

    mainEl.innerHTML = "";

    if (questionIndex < questions.length) {


        var newH1El = document.createElement("h1");
        newH1El.innerText = questions[questionIndex].q;
        mainEl.append(newH1El);
        var newBtnEl = document.createElement("button");
        newBtnEl.innerText = questions[questionIndex].correct;
        mainEl.append(newBtnEl);

        var btn1El = document.createElement("button");
        btn1El.innerText = questions[questionIndex].wrongA;
        mainEl.append(btn1El);

        var btn2El = document.createElement("button");
        btn2El.innerText = questions[questionIndex].wrongB;
        mainEl.append(btn2El)

        var btn3El = document.createElement("button");
        btn3El.innerText = questions[questionIndex].wrongC;
        mainEl.append(btn3El)
    } else {

        clearInterval(timeInterval);
    }




};


function answerClick(event) {
    if (event.target.localName === "button") {
        if (event.target.textContent === questions[questionIndex].correct) {

            score++;
        } else {
            timeLeft = timeLeft - 10;
            score--;
        }
        questionIndex++;
        gameQuestions();
        console.log(score);
    }

};

mainEl.onclick = answerClick;