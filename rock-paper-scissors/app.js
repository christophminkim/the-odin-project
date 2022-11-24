addEventListener('DOMContentLoaded', () => {
  const choiceBtns = document.querySelectorAll('.choice-btns');
  const resultDiv = document.querySelector('.results');
  choiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.textContent === 'Rock') {
        resultDiv.textContent = playRound(btn.textContent, getComputerChoice());
      } else if (btn.textContent === 'Paper') {
        resultDiv.textContent = playRound(btn.textContent, getComputerChoice());
      } else {
        resultDiv.textContent = playRound(btn.textContent, getComputerChoice());
      }
    });
  });
  function getComputerChoice() {
    const choice = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
  }

  function playRound(playerSelection, computerSelection) {
    const playerUp = playerSelection.toUpperCase();

    if (playerUp === 'ROCK' && computerSelection === 'ROCK') return 'TIE';
    else if (playerUp === 'ROCK' && computerSelection === 'PAPER') return 'YOU LOSE';
    else if (playerUp === 'ROCK' && computerSelection === 'SCISSORS') return 'YOU WIN';
    else if (playerUp === 'PAPER' && computerSelection === 'ROCK') return 'YOU WIN';
    else if (playerUp === 'PAPER' && computerSelection === 'PAPER') return 'TIE';
    else if (playerUp === 'PAPER' && computerSelection === 'SCISSORS') return 'YOU LOSE';
    else if (playerUp === 'SCISSORS' && computerSelection === 'ROCK') return 'YOU LOSE';
    else if (playerUp === 'SCISSORS' && computerSelection === 'PAPER') return 'YOU WIN';
    else if (playerUp === 'SCISSORS' && computerSelection === 'SCISSORS') return 'TIE';
    else return 'PLAY THE GAME CORRECTLY';
  }

  // function game() {
  //   let score = {};
  //   if (score.player === score.computer) return 'WINNER: NO ONE';
  //   else if (score.player > score.computer) return 'WINNER: PLAYER';
  //   else return 'WINNER: COMPUTER';
  // }
});
