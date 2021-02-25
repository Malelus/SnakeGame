let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// let up = document.getElementById('up');
// let right = document.getElementById('right');
// let left = document.getElementById('left');
// let down = document.getElementById('down');

// up.addEventListener('click', () => {
//   if (lastInputDirection.y !== 0) return;
//   inputDirection = { x: 0, y: -1 };
// });

// right.addEventListener('click', () => {
//   if (lastInputDirection.y !== 0) return;
//   inputDirection = { x: 0, y: 1 };
// });

// down.addEventListener('click', () => {
//   if (lastInputDirection.x !== 0) return;
//   inputDirection = { x: 1, y: 0 };
// });

// left.addEventListener('click', () => {
//   if (lastInputDirection.x !== 0) return;
//   inputDirection = { x: -1, y: 0 };
// });

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;

    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;

    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;

    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
