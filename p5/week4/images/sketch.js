var wavePic;
var mountainPic;
var forestPic;
var newFont;
var song1;

function preload(){
  song1 = loadSound("assests/lofiSong.mp3");
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  wavePic = loadImage("assests/waves.jpeg");
  mountainPic = loadImage("assests/mountains.jpeg");
  forestPic = loadImage("assests/forest.jpeg");
  newFont = loadFont("assests/newFont.ttf");

}

function draw() {
  // put drawing code here
  image(wavePic, 0, 0);
  image(mountainPic, 310, 15);
  image(forestPic, 165, 175);
  //text stuff//
  fill("pink");
  textFont(newFont);
  textSize(36);
  text("The flowers are brilliantly colored", 0, 400);

}

function mouseClicked() {
  song1.play()
}

function doubleClicked() {
  song1.stop()
}
