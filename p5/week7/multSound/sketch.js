var song1, song2, song3;
var myState = 0;

function preLoad() {
  song1 = loadSound("assests/donkey.mp3");
  song2 = loadSound("assests/skate.mp3");
  song3 = loadSound("assests/thrill.mp3");
}

function setup() {
  // put setup code here
  creatCanvas(720, 200);
  background(255, 0, 0);
  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function draw() {
  // put drawing code here
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
