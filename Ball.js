let ballInstance = (() => {
	let instance;

	class Ball {
		constructor() {
			this.x = 500;
			this.y = 278;
			this.diameter = 25;
			this.xSpeed = 8;
			this.ySpeed = 8;
			this.radius = this.diameter / 2;
		}

		create() {
			circle(this.x, this.y, this.diameter);
			this.move();
		}

		move() {
			// this.x += this.xSpeed;
			// this.y += this.ySpeed;

			this.checkEdgeHit();
		}

		checkEdgeHit() {
			if (this.x + this.radius > width || this.x - this.radius < 0) this.xSpeed *= -1;
			if (this.y + this.radius > height || this.y - this.radius < 0) this.ySpeed *= -1;
		}

		checkRacketHit(xRacket, yRacket, racketHeight, widthRacket) {
			let hit = collideRectCircle(xRacket, yRacket, racketHeight, widthRacket, this.x, this.y, this.radius);

			if (hit) this.xSpeed *= -1;
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