import FlappyBird from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('bird-game');
  const game = new FlappyBird(canvas);
  canvas.addEventListener("mousedown", game.click.bind(game));
})
