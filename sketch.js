function setup() {
  createCanvas(1000, 563);
}

function draw() {
  let ball = ballInstance.getInstance();
  background(50);
  ball.create();
}