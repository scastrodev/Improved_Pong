let myFont;
function preload() {
	myFont = loadFont('static/linerama.ttf');
}
function setup() {
	createCanvas(1000, 563);
}
function draw() {
	let ball = ballInstance.getInstance();
	let playerRacket = playerRacketInstance.getInstance();
	let opponentRacket = opponentRacketInstance.getInstance();
	let scoreboard = scoreboardInstance.getInstance();

	applyStyle();
	background(50);
	line(500, 562, 500, 0);
	ball.create();
	playerRacket.create();
	opponentRacket.create();
	opponentRacket.move(ball.y), 5000;
	ball.checkRacketHit(playerRacket.x, playerRacket.y, playerRacket.height, playerRacket.width);
	ball.checkRacketHit(opponentRacket.x, opponentRacket.y, opponentRacket.height, opponentRacket.width);
	scoreboard.create();
	scoreboard.madeScore(ball.x);
	
}
function applyStyle() {
	noFill();
	stroke('#FFFFFF');
	strokeWeight(1.5);	
	textFont(myFont);
	textAlign(CENTER);
	textSize(30);
}