class Grid {
  constructor(size) {
    this.size = size;
  }

  createGrid = (size) => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);
    }
  };
}

export default Grid;
