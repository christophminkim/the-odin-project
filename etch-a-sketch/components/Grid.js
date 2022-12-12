class Grid {
  constructor(size) {
    this.size = size;
  }

  createGrid = (size) => {
    const gridContainer = document.querySelector('.grid-container');
    const sizeDiv = document.createElement('div');
    const grid = document.querySelector('.grid');

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sizeDiv.textContent = `${size}x${size}`;
    sizeDiv.classList.add('size');

    gridContainer.appendChild(sizeDiv);

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);
    }
  };

  createNewGrid = () => {
    const popup = document.querySelector('.popup');

    popup.addEventListener('click', () => {
      let size = prompt('Enter new grid size');
      while (size > 100) size = prompt('Enter a size between 1 - 100');
      if (size === null) size = 16;

      const gridContainer = document.querySelector('.grid-container');
      const sizeDiv = document.querySelector('.size');
      const grid = document.querySelector('.grid');

      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }

      grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      sizeDiv.textContent = `${size}x${size}`;

      gridContainer.appendChild(sizeDiv);

      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
      }
    });
  };
}

export default Grid;
