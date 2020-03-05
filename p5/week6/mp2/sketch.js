var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(1450,800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(100);
    fill("white")
    textSize(36);
    text("This screen is on a timer, click for the rest",425,350);

    timer++;
    if(timer > 200){
      myState = 1;
      timer = 0;
    }
    break;

    case 1:
    background(237, 31, 203);
    textSize(36);
    fill(224, 155, 216);
    text("I heard you play the piano yesterday.",450,350);
    break;

    case 2:
    background("blue");
    textSize(36);
    fill(92, 128, 247)
    text("I was up in the tower trying to work, but you were playing so beautifully.",175,350);
    break;

    case 3:
    background(131, 14, 227);
    textSize(36);
    fill(84, 9, 128)
    text("I couldn't think, I couldn't move, I held my breath for fear of missing the slightest chord.",30,350);
    break;

    case 5:
    background(227, 151, 36);
    textSize(36);
    text("The sun was setting as your melody progressed",350,350);
    fill(242, 188, 51);
      rectMode(CENTER);
      translate(width / 2, height / 2);
      translate(p5.Vector.fromAngle(millis() / 1750, 450));
      ellipse(0, 0, 100, 100);
    break;

    case 6:
    background(232, 225, 14);
    fill(173, 162, 3);
    textSize(36);
    text("and it was as if it were you that was orchestrating the sun itself",225,350);
    break;

    case 7:
    background(43, 122, 56);
    fill(6, 196, 19);
    textSize(42);
    text("and its magnificent array of colors were dancing just for me.",200,350);
    fill(237, 31, 203);
      rectMode(CENTER);
      translate(400,200);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      rect(0, 0, 20, 20);
    fill("blue");
      rectMode(CENTER);
      translate(2,2);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      rect(0, 0, 20, 20);
    fill(227, 151, 36);
      rectMode(CENTER);
      translate(3,3);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      rect(0, 0, 20, 20);
    fill(84, 9, 128);
      rectMode(CENTER);
      translate(4,4);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      rect(0, 0, 20, 20);
    fill("red");
      rectMode(CENTER);
      translate(5,5);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      rect(0, 0, 20, 20);


    break;
  }


}
//this might be wrong//
function mouseReleased() {
  // add one to myState
  // if myState got past 2, reset it to 0
  myState++;

  if (myState > 7) {
    myState = 0;
  }

}
