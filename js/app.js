let quizData = [
  {
    question: "how are you?",
    a: "good",
    b: "amazing",
    c: "bad",
    d: "very very good",
    cerate: "a",
    questionNumber: 1,
  },
];
let startQuiz = 0;
let timeLeft = 100;
let timeId;
let AllQuestionsNumber = quizData.length - 1;
let playerChoose;
let clickedId;

// point
let point = 0;
let displayPoints = document.getElementById("point-el");
displayPoints.textContent = ` ${point}`;
// time
let displayTime = document.getElementById("time-el");
displayTime.textContent = timeLeft;
// displayCountDown();

// question number;
let displayQuestionNumber = document.getElementById("question-number-el");
displayQuestionNumber.textContent = quizData[startQuiz].questionNumber;

// all questions number;
let displayAllQuestionsNumber = document.getElementById(
  "all-questions-number-el"
);
displayAllQuestionsNumber.textContent = quizData.length;
// question;
let displayQuestion = document.getElementById("question-el");
displayQuestion.textContent = quizData[startQuiz].question;

let answerButtonArray = document.querySelectorAll(".answer-btn");
for (let i = 0; i < answerButtonArray.length; i++) {
  answerButtonArray[i].addEventListener("click", checkResult);
}
let displayAnswer_A = document.getElementById("answer-a");
displayAnswer_A.textContent = quizData[startQuiz].a;

let displayAnswer_B = document.getElementById("answer-b");
displayAnswer_B.textContent = quizData[startQuiz].b;
let displayAnswer_C = document.getElementById("answer-c");
displayAnswer_C.textContent = quizData[startQuiz].c;
let displayAnswer_D = document.getElementById("answer-d");
displayAnswer_D.textContent = quizData[startQuiz].d;

function checkResult() {
  clickedId = this.id;
  playerChoose = clickedId;
  console.log(playerChoose);
  if (playerChoose === quizData[startQuiz].cerate) {
    alert("right answer");
    
  } else {
    alert("wrong answer");
  }
}
function handler() {
  for (let i = 0; i < answerButtonArray.length; i++) {
    answerButtonArray[i].style.cursor = "not-allowed";
  }
}
function nextQuestion() {
  startQuiz = startQuiz + 1;
  console.log(startQuiz);
}
function displayCountDown() {
  timeId = setInterval(countDown, 1000);
}
function countDown() {
  if (timeLeft === -1) {
    clearTimeout(timeId);
    // alert(
    //   "you can not click any answers button anymore and next question will show"
    // );
    if (playerChoose === undefined) {
      alert(
        "you didnt write any questions its going to show thre result after that"
      );
    }
  } else {
    displayTime.textContent = timeLeft;
    timeLeft--;
  }
}
