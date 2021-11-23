let opponentRacketInstance = (() => {
	let instance;

    class OpponentRacket {
		constructor() {
			this.x = 985;
			this.y = 257;
			this.height = 10;
			this.width = 100;
			this.ySpeed;
		}
	
		create() {
			rect(this.x, this.y, this.height, this.width);
		}
	
		move(yBall) {
			this.ySpeed = yBall - this.y - this.width / 2 - 15;
			this.y += this.ySpeed;
		}
    }

	function createInstance() {
		let opponentRacketSingleton = new OpponentRacket();
		return opponentRacketSingleton;
	}

	return {
		getInstance: () => {
			if (!instance) instance = createInstance();
			return instance;
		}
	}
})();