var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(100);
    text("This is the splash screen",100,100);

    timer++;
    if(timer > 200){
      myState = 1;
      timer = 0;
    }
    break;

    case 1:
    background(237, 31, 203);
    text("This is the playing screen",100,100);
    break;

    case 2:
    background("blue");
    text("This is the losing screen",100,100);
    break;
  }
fill("white");
text("the score is",100,700)

}
//this might be wrong//
function mouseReleased() {
  // add one to myState
  // if myState got past 2, reset it to 0
  myState++;

  if (myState > 2) {
    myState = 0;
  }

}
