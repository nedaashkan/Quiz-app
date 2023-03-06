let quizData = [
  {
    question: "What is the world's widest river?",
    a: "The Amazon",
    b: "The Ganges",
    c: "The Loire",
    d: "The Mekong",
    cerate: "a",
    questionNumber: 1,
  },
  {
    question: "biggest country in the word?",
    a: "India",
    b: "China",
    c: "Russia",
    d: "Pakistan",
    cerate: "c",
    questionNumber: 2,
  },
  {
    question: "What is a baby spider known as?",
    a: "A Codling",
    b: "A Leveret",
    c: "A Joey",
    d: "A Spiderling",
    cerate: "d",
    questionNumber: 3,
  },
  {
    question: "best programming language?",
    a: "Python",
    b: "Javascript",
    c: "Java",
    d: "PHP",
    cerate: "b",
    questionNumber: 4,
  },
  {
    question: "Which country owns Corfu?",
    a: "South Africa",
    b: "Italy",
    c: "Greece",
    d: "turkiye",
    cerate: "c",
    questionNumber: 5,
  },
];
let startQuiz = 0;
let timeLeft;
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
displayCountDown();
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
  if (playerChoose === quizData[startQuiz].cerate) {
    this.classList.add("cerate-answer");
    point = point + 1;
    displayPoints.textContent = point;
    for (let i = 0; i < answerButtonArray.length; i++) {
      answerButtonArray[i].removeEventListener("click", checkResult);
    }
  } else {
    this.classList.add("wrong-answer");

    let cerateAnswerButton = document.getElementById(
      `${quizData[startQuiz].cerate}`
    );
    cerateAnswerButton.classList.add("cerate-answer");
    for (let i = 0; i < answerButtonArray.length; i++) {
      answerButtonArray[i].removeEventListener("click", checkResult);
    }
  }
}

function nextQuestion() {
  for (let i = 0; i < answerButtonArray.length; i++) {
    answerButtonArray[i].addEventListener("click", checkResult);
  }
  for (let i = 0; i < answerButtonArray.length; i++) {
    answerButtonArray[i].classList.remove("cerate-answer");
    answerButtonArray[i].classList.remove("wrong-answer");
  }
  startQuiz = startQuiz + 1;
  if (startQuiz >= 5) {
    clearTimeout(timeId);
    displayCountDown();
    displayTime.textContent = timeLeft;
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
  timeLeft = 100;
  timeId = setInterval(countDown, 1000);
}
function countDown() {
  if (timeLeft === -1) {
    clearTimeout(timeId);
    displayCountDown();
    displayTime.textContent = timeLeft;
    startQuiz = 0;
    point = 0;
    displayPoints.textContent = 0;
    displayQuestionAnswer(
      quizData[startQuiz].questionNumber,
      quizData.length,
      quizData[startQuiz].question,
      quizData[startQuiz].a,
      quizData[startQuiz].b,
      quizData[startQuiz].c,
      quizData[startQuiz].d
    );
    for (let i = 0; i < answerButtonArray.length; i++) {
      answerButtonArray[i].classList.remove("cerate-answer");
      answerButtonArray[i].classList.remove("wrong-answer");
    }
  } else {
    displayTime.textContent = timeLeft;
    timeLeft--;
  }
  if (playerChoose === undefined) {
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
