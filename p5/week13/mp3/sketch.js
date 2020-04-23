var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 20 * 60;
var timer = maxTimer;
var newFont;
var gameSong;
var winSong;
var loseSong;

function preload() {
  gameSong = loadSound("assets/dreams.mp3");
  winSong = loadSound("assets/run.mp3");
  loseSong = loadSound("assets/lose.mp3")
}


function setup() {
  // put setup code here
  createCanvas(800, 800);
  newFont = loadFont("assets/newFont.ttf");

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
}

function draw() {
  // put drawing code here
  switch (myState) {

    case 0: //menu//
      background(14, 17, 179);
      fill(209, 201, 44);
      textSize(50);
      textFont(newFont);
      text("DISCOUNT PACMAN", width / 2, 300);
      fill("white");
      textSize(24);
      text("CLICK SCREEN TO PLAY", width / 2, 500);
      textSize(16);
      text("(USE ARROWS TO MOVE)", width / 2, 550);
      winSong.stop();
      loseSong.stop();
      break;

    case 0.5:
      gameSong.loop();
      myState = 1;
      break;

    case 1: //game state//
      game();
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 2.5;
      }
      break;

    case 1.5:
      gameSong.stop();
      winSong.play();
      myState = 2;
      break;

    case 2: //win//
      background(28, 105, 23);
      fill('white');
      textSize(42);
      text("YOU WON!", width / 2, height / 2);
      break;

    case 2.5:
      gameSong.stop();
      loseSong.loop();
      myState = 3;
      break;

    case 3: //lose//
      background(150, 22, 11);
      fill('white');
      textSize(42);
      text("TRY AGAIN", width / 2, height / 2);
      break;


  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 0.5;
      break;

    case 2:
      timer = maxTimer;

      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;

    case 3:
      timer = maxTimer;

      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;
  }
}

function game() {
  background("black");

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 45) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 1.5;
  }

  fill('yellow');
  arc(frogPos.x, frogPos.y, 65, 65, 5, PI + QUARTER_PI, PIE);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    frogPos.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y += 5;
  }

}

function Car() {
  //attributes//
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods//
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, 45, 45);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
