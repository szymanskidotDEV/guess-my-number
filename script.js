'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  if (score <= 0) {
    document.querySelector('.message').textContent = 'GAME OVER!';
  } else {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.check').disabled = true;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '27rem';
      document.querySelector('.check').style.backgroundColor = '#ccc';
      document.querySelector('.check').style.cursor = 'not-allowed';
      document.querySelector('h1').textContent = 'You won!';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        console.log(highScore);
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.backgroundColor = '#eee';
  document.querySelector('.check').style.cursor = 'pointer';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
