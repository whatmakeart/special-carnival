// modification of ball bounce example from with multiple balls
// https://editor.p5js.org/whatmakeart/sketches/36YIBlx3Z

// create a Ball class to have multiple independent ball objects
class Ball {
  // constructor is like a setup() function for the class
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.r = random(255); // initial random red value
    this.g = random(255); // initial random green value
    this.b = random(255); // initial random blue value
    this.a = random(255); // initial random alpha value
  }

  // create a move method / function
  // in the previous sketch this was x = x + speedX; and y = y + SpeedY;
  // and both incrementors were in the draw() function in the draw() function
  // since it is a class the "this" keyword is needed for the variables
  move() {
    this.x = this.x + this.speedX; // could be shortened but left explicit for clarity
    this.y = this.y + this.speedY; // could be shortened but left explicit for clarity

    if (this.x >= width - this.size / 2 || this.x <= this.size / 2) {
      // reverses the X speed by multiplying by -1
      this.speedX = this.speedX * -1; // could be shortened but left explicit for clarity
      this.changeColor(); // same as previous example but now a method of the class
    }
    if (this.y > height - this.size / 2 || this.y < this.size / 2) {
      // reverses the Y speed by multiplying by -1
      this.speedY = this.speedY * -1; // could be shortened but left explicit for clarity
      this.changeColor(); // same as previous example but now a method of the class
    }
  }

  // create a display method / function for drawing the ellipse / ball
  display() {
    fill(this.r, this.g, this.b, this.a); // was previously in the draw function
    ellipse(this.x, this.y, this.size, this.size); // was previously in the draw function
  }
  
  // method to change the color of each ball
  changeColor() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
  }
}

// create the balls array to hold the Ball objects
let balls = [];

let numBalls;
let ballMinSize = 32;
let ballMaxSize = 66;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numBalls = random(15, 80); // random number of initial balls created
  // create the list / array of balls
  for (let i = 0; i < numBalls; i++) {
    balls.push(
      new Ball(
        random(ballMaxSize, width - ballMaxSize),
        random(ballMaxSize, height - ballMaxSize),
        random(ballMinSize, ballMaxSize),
        random(-5, 5),
        random(-5, 5)
      )
    );
  }
  noStroke(); // remove the stroke
  background(random(255), random(255), random(255)); // start with random color background
}

function draw() {
  //background(0, 150, 100); // You can comment this out for a trail effect
  for (let i = 0; i < balls.length; i++) {
    // move is still in the draw function but now is a method from the Ball class working on the [i] object
    balls[i].move();
    // display is still in the draw function but now is a method from the Ball class working on the [i] object
    balls[i].display();
  }
}

// built in p5.js window resize function
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
