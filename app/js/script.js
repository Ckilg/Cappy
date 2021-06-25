if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
     navigator.serviceWorker.register('/sw.js');
  });
}



const questionEl = document.getElementById('textbulb__text');
const usernameForm = document.getElementById('usernameForm');
const cappieEl = document.getElementById('cappie');
const controlsEl = document.getElementById('controlsContainer');

const questions = [];
questions[0]= "Is Bob Muller wearing any pants today?";
questions[1]= "Have you asked Jeffrey how the arve is?";
questions[2]= "Did you have a coffee break with a colleague?";
questions[3]= "Is your CV still marked as green?";
questions[4]= "Have you had a Jumbo date with a colleague?";
questions[5]= "Have you send a LinkedIn mail to at least one high school classmates?";
questions[6]= "Have you obtained your Scrum certificate yet?";
questions[7]= "Have you done all your mandatory meetings?";

let randomQuestion = '';
getRandomQuestion();

function getRandomQuestion() {
  randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  questionEl.innerHTML = randomQuestion;
}

function submitForm() {
  const val =  document.getElementById("username").value;
  socket.emit('sendUsername', val);
  username = val;

  usernameForm.classList.add('hidden');
  cappieEl.classList.remove('hidden');
  controlsEl.classList.remove('hidden');
}

var socket = io();
  
var controls = document.getElementById('controls');
var textbulb = document.getElementById('textbulb');
var username = '';

controlYes.addEventListener('click', function(e) {
  e.preventDefault();
  socket.emit('answer', randomQuestion, true);
  getRandomQuestion();
});

controlNo.addEventListener('click', function(e) {
  e.preventDefault();
  socket.emit('answer', randomQuestion, false);
  getRandomQuestion();
});
