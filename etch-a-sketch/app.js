document.addEventListener('DOMContentLoaded', () => {
  const squareContainer = document.querySelector('.square-container');

  for (let i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.id = `square-${i}`;
    squareContainer.appendChild(square);
  }
});
