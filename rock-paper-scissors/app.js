addEventListener('DOMContentLoaded', () => {
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

  const player = prompt('Rock, paper, or scissors?');

  function game() {
    let score = {};
    for (let i = 0; i < 5; i++) {
      const result = playRound(player, getComputerChoice());
      console.log(result);
      if (result === 'YOU WIN') score.player ? (score.player += 1) : (score.player = 1);
      if (result === 'YOU LOSE') score.computer ? (score.computer += 1) : (score.computer = 1);
    }
    if (score.player === score.computer) return 'WINNER: NO ONE';
    else if (score.player > score.computer) return 'WINNER: PLAYER';
    else return 'WINNER: COMPUTER';
  }

  console.log(game());
});
