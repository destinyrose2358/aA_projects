const CONSTANTS = {
  GRAVITY: -0.5,
  FLAP_SPEED: 8,
  TERMINAL_VEL: 12,
  BIRD_HEIGHT: 30,
  BIRD_WIDTH: 40
};

export default class Bird { 
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.y = this.dimensions.height / 2;
    this.x = this.dimensions.width / 3;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x - (CONSTANTS.BIRD_WIDTH / 2),
      this.dimensions.height - this.y - (CONSTANTS.BIRD_HEIGHT / 2),
      CONSTANTS.BIRD_WIDTH,
      CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.y = this.y + this.velocity <= 0 ? CONSTANTS.BIRD_HEIGHT / 2 : this.y + this.velocity;
    this.y = this.y + this.velocity >= this.dimensions.height - (CONSTANTS.BIRD_HEIGHT / 2) ? this.dimensions.height - (CONSTANTS.BIRD_HEIGHT / 2) : this.y;
    this.velocity = this.velocity + CONSTANTS.GRAVITY < CONSTANTS.TERMINAL_VEL ? this.velocity + CONSTANTS.GRAVITY : CONSTANTS.TERMINAL_VEL;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  getBounds() {
    return {
      left: this.x - (CONSTANTS.BIRD_WIDTH / 2),
      top: this.dimensions.height - this.y - (CONSTANTS.BIRD_HEIGHT / 2),
      right: this.x + (CONSTANTS.BIRD_WIDTH / 2),
      bottom: this.dimensions.height - this.y + (CONSTANTS.BIRD_HEIGHT / 2)
    }
  }
}