function setup() {
	createCanvas(1000, 563);
}

function draw() {
	let ball = ballInstance.getInstance();
	let playerRacket = playerRacketInstance.getInstance();
	let opponentRacket = opponentRacketInstance.getInstance();
	let scoreboard = scoreboardInstance.getInstance();

	background(50);
	ball.create();
	playerRacket.create();
	opponentRacket.create();
	opponentRacket.move(ball.y);
	ball.checkRacketHit(playerRacket.x, playerRacket.y, playerRacket.height, playerRacket.width);
	ball.checkRacketHit(opponentRacket.x, opponentRacket.y, opponentRacket.height, opponentRacket.width);
	scoreboard.create();
	scoreboard.madeScore(ball.x);
}