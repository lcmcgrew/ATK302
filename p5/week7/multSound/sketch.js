var song1, song2, song3;
var myState = 0;

function preLoad() {
  song1 = loadSound("assets/love.mp3");
  song2 = loadSound("assets/snow.mp3");
  song3 = loadSound("assets/ocean.mp3");

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function setup() {
  // put setup code here
  creatCanvas(720, 200);

}

function draw() {
  // put drawing code here
  background("pink")
  switch (myState) {
    case 0:
      song1.play();
      myState = 1;
      break;

    case 1:
      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;
  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  myState++;
  if (myState > 5) {
    myState = 0;
  }
}
