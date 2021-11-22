let playerRacketInstance = (() => {
	let instance;

    class PlayerRacket {
		constructor() {
			this.x = 15;
			this.y = 200;
			this.height = 10;
			this.width = 100;
		}
	
		create() {
			rect(this.x, this.y, this.height, this.width);
			this.move();
		}
	
		move() {
			if (keyIsDown(UP_ARROW)) {
				this.y -= 5;
			} else if (keyIsDown(DOWN_ARROW)) {
				this.y += 5;
			}
		}
    }

	function createInstance() {
		let playerRacketSingleton = new PlayerRacket();
		return playerRacketSingleton;
	}

	return {
		getInstance: () => {
			if (!instance) instance = createInstance();
			return instance;
		}
	}
})();