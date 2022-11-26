// refactor by putting code in functions

// document.addEventListener('DOMContentLoaded', () => {
//   const squareContainer = document.querySelector('.square-container');
//   const popup = document.querySelector('.popup');

//   for (let i = 1; i <= 16 * 16; i++) {
//     const square = document.createElement('div');
//     square.className = 'square';
//     square.id = `square-${i}`;
//     squareContainer.appendChild(square);
//   }

//   const containerWidth = squareContainer.clientWidth;
//   const containerHeight = squareContainer.clientHeight;

//   popup.addEventListener('click', () => {
//     const numSquares = prompt('How many squares per side would you like for a new grid?');
//     if (numSquares > 100 || numSquares < 1) {
//       alert('Please input a number between 1 - 100');
//     } else {
//       squareContainer.replaceChildren();

//       squareContainer.style.maxWidth = '100%';
//       squareContainer.style.maxHeight = containerHeight;
//       squareContainer.style.resize = 'none';
//       squareContainer.style.gridTemplateColumns = `repeat(${numSquares}, fit-content(1rem))`;

//       for (let i = 1; i <= numSquares * numSquares; i++) {
//         const square = document.createElement('div');
//         square.className = 'square';
//         square.id = `square-${i}`;
//         square.style.width = '100%';
//         square.style.height = '100%';

//         squareContainer.appendChild(square);
//       }
//     }
//   });
// });
