document.addEventListener('DOMContentLoaded', () => {
  const squareContainer = document.querySelector('.square-container');

  for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.id = `square-${i + 1}`;
    squareContainer.appendChild(square);
  }
});
