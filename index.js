var rls = require('readline-sync');

function log(data) {
  console.log(data);
}

var userName = rls.question('Your Name? ');
log('Hello! ' + userName + ', Do You Know Yash?');

var score = 0;

function play(question, answer){
  var userAnswer = rls.question(question);

  if(userAnswer === answer){
    log('You were Right!');
    score++;
  } else{
    log('You were Wrong!');
    score--;
  }

  console.log('current score: ', score);
  log('............');
}

var qna = [

  {
  question: 'what is your age? ',
  answer: '21',
  },

  {
  question: 'where are you from? ',
  answer: 'tirupati',
  },

  {
  question: 'where do you study? ',
  answer: 'chennai',
  },

];

for (var i = 0; i < qna.length; i++) {
  var currentQna = qna[i];
  play(currentQna.question, currentQna.answer);
}
