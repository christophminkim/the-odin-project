'use strict';

import Grid from './components/Grid.js';

document.addEventListener('DOMContentLoaded', () => {
  const defaultGrid = new Grid(16);
  defaultGrid.createGrid(defaultGrid.size);
});
