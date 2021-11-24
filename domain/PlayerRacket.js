let playerRacketInstance = (() => {
	let instance;

    class PlayerRacket {
		constructor() {
			this.x = 5;
			this.y = 231;
			this.height = 10;
			this.width = 100;
		}
		create() {
			rect(this.x, this.y, this.height, this.width);
			this.move();
		}
		move() {
			if (this.y > 5 && keyIsDown(UP_ARROW)) this.y -= 5
			else if (this.y < 455 && keyIsDown(DOWN_ARROW)) this.y += 5;
		}
    }

	function createInstance() {
		return new PlayerRacket();
	}
	return {
		getInstance: () => !instance ? instance = createInstance() : instance
	}
})();