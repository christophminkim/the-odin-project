class Grid {
  constructor(size) {
    this.size = size;
  }

  createGrid = (size) => {
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);
    }
  };

  createNewGrid = () => {
    const popup = document.querySelector('.popup');
    let size;

    popup.addEventListener('click', () => {
      size = prompt('Enter new grid size');
      while (size > 100) size = prompt('Enter a size between 1 - 100');

      const grid = document.querySelector('.grid');

      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }

      grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
      }
    });
  };
}

export default Grid;
