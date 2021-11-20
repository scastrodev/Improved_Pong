let ballInstance = (() => {
  let instance;

  class Ball {
    constructor() {
      this.x = 400;
      this.y = 225;
      this.diameter = 25;
      this.xSpeed = 6;
      this.ySpeed = 6;
      this.radius = this.diameter / 2;
    }

    create() {
      circle(this.x, this.y, this.diameter);
      this.move();
    }

    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.checkEdgeHit();
    }

    checkEdgeHit() {
      if (this.x + this.radius > width || this.x - this.radius < 0) this.xSpeed *= -1;

      if (this.y + this.radius > height || this.y - this.radius < 0) this.ySpeed *= -1;
    }
  }
  
  function createInstance() {
    let ballSingleton = new Ball();
    return ballSingleton;
  }
  
  return {
    getInstance: () => {
      if (!instance) instance = createInstance();
      return instance;
    }
  }
})();