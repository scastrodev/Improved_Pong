let opponentRacketInstance = (() => {
	let instance;

    class OpponentRacket {
		constructor() {
			this.x = 985;
			this.y = 231;
			this.height = 10;
			this.width = 100;
		}
		create() {
			rect(this.x, this.y, this.height, this.width);
		}
		move(yBall) {
			this.ySpeed = (yBall - this.y) - this.width / 2;
			this.y += this.ySpeed;
		}
    }

	function createInstance() {
		return new OpponentRacket();
	}
	return {
		getInstance: () => !instance ? instance = createInstance() : instance
	}
})();