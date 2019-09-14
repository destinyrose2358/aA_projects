const CONSTANTS = {
  PIPE_SPACING: 220,
  GAP_SPACING: 150,
  PIPE_SPEED: 2,
  PIPE_WIDTH: 30
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [this.createPipe(200)];
    this.pushPipe();
    this.pushPipe();
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    this.drawsPipes(ctx);
  }

  createPipe(x) {
    return {x: x+CONSTANTS.PIPE_SPACING, gap: Math.random() * this.dimensions.height}
  }

  pushPipe() {
    this.pipes.push(this.createPipe(this.pipes[this.pipes.length - 1].x));
  }

  movePipes() {
    this.pipes.forEach( pipe => {
      pipe.x -= CONSTANTS.PIPE_SPEED;

      if (pipe.x < 0) {
        this.pipes.shift();
        this.pushPipe();
      }
    });
  }
  
  leftBoundOf(pipe) {
    return pipe.x - (CONSTANTS.PIPE_WIDTH / 2);
  }

  rightBoundOf(pipe) {
    return pipe.x + (CONSTANTS.PIPE_WIDTH / 2);
  }

  topGapOf(pipe) {
    return pipe.gap;
  }

  bottomGapOf(pipe) {
    return pipe.gap + CONSTANTS.GAP_SPACING;
  }

  drawsPipes(ctx) {
    this.pipes.forEach( pipe => {
      ctx.fillStyle = "green";
      ctx.fillRect(this.leftBoundOf(pipe), 0, CONSTANTS.PIPE_WIDTH, this.dimensions.height);
      ctx.fillStyle = "skyblue";
      ctx.fillRect(this.leftBoundOf(pipe), this.topGapOf(pipe), CONSTANTS.PIPE_WIDTH, CONSTANTS.GAP_SPACING);
    });
  }

  collidesWith(bird) {
    let bounds = bird.getBounds();
    this.pipes.some(pipe => {
      return 
    })
  }
}