var rls = require("readline-sync");

function log(data) {
  console.log(data);
}

var userName = rls.question("Your Name? ");
log("Hello! " + userName + ", Do You Know Yaswanth?");

var score = 0;

function play(question, answer) {
  var userAnswer = rls.question(question);

  if (userAnswer === answer) {
    log("You were Right!");
    score++;
  } else {
    log("You were Wrong!");
    score--;
  }

  if (i === qna.length - 1) {
    return console.log("YOUR TOTAL SCORE IS ", score);
  }

  console.log("current score: ", score);
  log("............");
}

var qna = [
  {
    question: "what is yaswanth`s age? ",
    answer: "21",
  },

  {
    question: "yaswanth`s hometown name? ",
    answer: "tirupati",
  },

  {
    question: "yaswanth graduated from? ",
    answer: "chennai",
  },

  {
    question: "what is yaswanth`s favorite color? ",
    answer: "green",
  },

  {
    question: "who is yaswanth`s favorite hero? ",
    answer: "maheshbabu",
  },
];

for (var i = 0; i < qna.length; i++) {
  var currentQna = qna[i];
  play(currentQna.question, currentQna.answer);
}
