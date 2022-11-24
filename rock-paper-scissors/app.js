addEventListener('DOMContentLoaded', () => {
  const choiceBtns = document.querySelectorAll('.choice-btns');
  const results = document.querySelector('.results');
  const scores = document.querySelector('.scores');

  const score = {
    player: 0,
    computer: 0,
  };

  choiceBtns.forEach((btn) => {
    const player = btn.textContent;
    btn.addEventListener('click', () => {
      if (score.player > 5 || score.computer > 5) score.player = score.computer = 0;
      if (player === 'Rock') game(player, getComputerChoice());
      else if (player === 'Paper') game(player, getComputerChoice());
      else game(player, getComputerChoice());
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

  function game(player, computer) {
    const result = playRound(player, computer);

    if (result === 'YOU WIN') {
      score.player += 1;
      scores.textContent = `Player: ${score.player} --- Computer: ${score.computer}`;
    } else if (result === 'YOU LOSE') {
      score.computer += 1;
      scores.textContent = `Player: ${score.player} --- Computer: ${score.computer}`;
    }

    if (score.player === 5) results.textContent = 'YOU WIN';
    else if (score.computer === 5) results.textContent = 'YOU LOSE';
  }
});
