console.log('hi');
var firstSentence = 'You go to space';
var secondSentence = 'You go to the deep sea';
var thirdSentence = 'but a new invasive species attaches itself to your wetsuit.';
var fourthSentence = 'but you brought back a space virus.';
var fifthSentence = 'You\'re scared and you just let the pieces fall where they may';
var sixthSentence = 'But you try to repair humanity';
var seventhSentence = 'and then you write a memoir.';
var eighthSentence = 'And your greedy ass sells the movie rights.';

window.onload = function(event) {
  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');
  var firstChoice = document.getElementById('choice-one');
  var secondChoice = document.getElementById('choice-two');
  var thirdChoice = document.getElementById('choice-three');
  var fourthChoice = document.getElementById('choice-four');
  var fifthChoice = document.getElementById('choice-five');
  var sixthChoice = document.getElementById('choice-six');
  var seventhChoice = document.getElementById('choice-seven');
  var eighthChoice = document.getElementById('choice-eight');

  firstChoice.onclick = function(event) {
    createRow(firstSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  secondChoice.onclick = function(event) {
    createRow(secondSentence);
    document.getElementById('first-step').style.display = 'none';
  }
  thirdChoice.onclick = function(event) {
    createRow(thirdSentence);
    document.getElementById('second-step').style.display = 'none';
  }
  fourthChoice.onclick = function(event) {
    createRow(fourthSentence);
    document.getElementById('second-step').style.display = 'none';
  }
  fifthChoice.onclick = function(event) {
    createRow(fifthSentence);
    document.getElementById('third-step').style.display = 'none';
  }
  sixthChoice.onclick = function(event) {
    createRow(sixthSentence);
    document.getElementById('third-step').style.display = 'none';
  }
  seventhChoice.onclick = function(event) {
    createRow(seventhSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }
  eighthChoice.onclick = function(event) {
    createRow(eighthSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }
  console.log(nameInput, nameBtn);
}
//this function creates functions and rows to the app
function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}
