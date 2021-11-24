let down = 38;
let up = 76;
let opponentRacketInstance = (() => {
	let instance;

    class OpponentRacket {
		constructor() {
			this.x = 985;
			this.y = 231;
			this.height = 10;
			this.width = 100;
			this.ySpeed;
		}
		create() {
			rect(this.x, this.y, this.height, this.width);
		}
		move(yBall) {
			if (down > 0 && this.y < 455) {
				this.y += 6;
				down -= 1;
			} else {
				this.up();
			}
		}
		up() {
			if (up > 0 && this.y >= 3) {
				this.y -= 6;
				up -= 1;
			} else {
				this.reset();
			}
		}
		reset() {
			if (this.y == 459 && up == 0) up = 77;
			if (this.y == 3 && down == 0) down = 77;
		}
    }

	function createInstance() {
		return new OpponentRacket();
	}
	return {
		getInstance: () => !instance ? instance = createInstance() : instance
	}
})();