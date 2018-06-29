var p5Canvas;
var myName;
var y=-250;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Max");
  ballX = width / 1.5;
  ballY = height / 1.5;
  ballRadius = 50;
  ballXVelocity = 10;
  ballGrowth = 10;
}
//The ballons
function draw() {
background(90, 10, 65);
fill(255, 0, 0);
ellipse(200,-y,80,90);
fill(247, 244, 244);
ellipse(250,-y,80,90);
fill(245, 19, 245);
ellipse(255,-y,80,90);
fill(255, 255, 0);
ellipse(175,-y,80,90);
line(175,-y,200,128);
line(230,-y,200,128);
line(200,-y,200,128);
line(250,-y,200,128);
y=y+2;
}


function draw() {
  background(170, 128, 255);
  drawSquares(random(30, 60));
  drawBall();
}

function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
  var circumference = getCircumference(); // local variable
  if(circumference >= 600 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX += ballXVelocity;
  ballRadius += ballGrowth; 
  var ballDiameter = ballRadius * 2; // local variable
  fill(ballX, 0, ballY);
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}

function drawSquares(num) {
  // a while loop
  while(num > 0) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(80, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(255); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
    num--;
  }
}

function drawSquaresAlt(num) {
  // a for loop
  for(var i = 0; i < num; i++) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(255); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
  }
}
