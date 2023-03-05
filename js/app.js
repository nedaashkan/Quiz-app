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
  {
    question: "what is your name?",
    a: "neda",
    b: "negin",
    c: "aysan",
    d: "lucy",
    cerate: "c",
    questionNumber: 2,
  },
  {
    question: "how old are you ?",
    a: "12",
    b: "11",
    c: "10",
    d: "0",
    cerate: "d",
    questionNumber: 3,
  },
  {
    question: "are you normal?",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "who knows",
    cerate: "b",
    questionNumber: 4,
  },
  {
    question: "what is my dream job",
    a: "sleeping",
    b: "dancing",
    c: "programmings",
    d: "doctor",
    cerate: "c",
    questionNumber: 5,
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
displayPoints.textContent = point;
// time
let displayTime = document.getElementById("time-el");
displayTime.textContent = timeLeft;
// displayCountDown();
let displayQuestionNumber = document.getElementById("question-number-el");

let displayAllQuestionsNumber = document.getElementById(
  "all-questions-number-el"
);

let displayQuestion = document.getElementById("question-el");

let displayAnswer_A = document.getElementById("answer-a");
let displayAnswer_B = document.getElementById("answer-b");
let displayAnswer_C = document.getElementById("answer-c");
let displayAnswer_D = document.getElementById("answer-d");

function displayQuestionAnswer(
  questionNumber,
  allQuestionsNumber,
  question,
  answer_A,
  answer_B,
  answer_C,
  answer_D
) {
  displayQuestionNumber.textContent = questionNumber;
  displayAllQuestionsNumber.textContent = allQuestionsNumber;
  displayQuestion.textContent = question;
  displayAnswer_A.textContent = answer_A;
  displayAnswer_B.textContent = answer_B;
  displayAnswer_C.textContent = answer_C;
  displayAnswer_D.textContent = answer_D;
}

let answerButtonArray = document.querySelectorAll(".answer-btn");
for (let i = 0; i < answerButtonArray.length; i++) {
  answerButtonArray[i].addEventListener("click", checkResult);
}

function checkResult() {
  clickedId = this.id;
  playerChoose = clickedId;
  console.log(playerChoose);
  if (playerChoose === quizData[startQuiz].cerate) {
    this.classList.add("cerate-answer");
    point = point + 1;
    displayPoints.textContent = point;
    clearTimeout(timeId);
  } else {
    this.classList.add("wrong-answer");
    let cerateAnswerButton = document.getElementById(
      `${quizData[startQuiz].cerate}`
    );
    cerateAnswerButton.classList.add("cerate-answer");
  }
}

function nextQuestion() {
  startQuiz = startQuiz + 1;
  if (startQuiz >= 5) {
    alert("we dont have more question start the game again");
    startQuiz = 0;
    point = 0;
    displayPoints.textContent = 0;
  }
  displayQuestionAnswer(
    quizData[startQuiz].questionNumber,
    quizData.length,
    quizData[startQuiz].question,
    quizData[startQuiz].a,
    quizData[startQuiz].b,
    quizData[startQuiz].c,
    quizData[startQuiz].d
  );
}
function displayCountDown() {
  timeId = setInterval(countDown, 1000);
}
function countDown() {
  if (timeLeft === -1) {
    // clearTimeout(timeId);
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
displayQuestionAnswer(
  quizData[startQuiz].questionNumber,
  quizData.length,
  quizData[startQuiz].question,
  quizData[startQuiz].a,
  quizData[startQuiz].b,
  quizData[startQuiz].c,
  quizData[startQuiz].d
);
