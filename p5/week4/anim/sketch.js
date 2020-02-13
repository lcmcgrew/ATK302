var x = 0;

function setup() {
  // put setup code here
  createCanvas(1500, 1000);
}

function draw() {
  // put drawing code here
  background("black");
  push();
  translate(x, 0);
  bear();
  pop();

  x = x + 10;

  if (x > width) {
    x = 0;
  }

  //ground//
  fill("green");
  rect(0, 892, 1500, 150)
}

function bear() {
  //cordinate command//
  //fill("white");//
  //text(mouseX + "," + mouseY,100,200);//
  //left leg//
  fill("white");
  ellipse(650, 765, 65, 250);
  //right leg//
  fill("white");
  ellipse(740, 765, 65, 250);
  //torso//
  fill("white");
  ellipse(700, 550, 225, 275);
  //head//
  fill("white");
  ellipse(700, 350, 175, 200);
  //nose//
  fill("pink")
  triangle(687, 341, 697, 352, 707, 341);
  //left ear//
  fill("white");
  ellipse(638, 249, 50, 45);
  //right ear//
  fill("white");
  ellipse(762, 249, 50, 45);
  //mouth//
  fill("black")
  line(660, 385, 730, 385)
  //right eye//
  fill(168, 19, 209);
  ellipse(728, 320, 15, 20);
  //scar//
  fill("red");
  triangle(665, 300, 653, 319, 665, 338);
  //eye patch//
  fill("black");
  triangle(643, 309, 656, 332, 690, 309);
  fill("black");
  line(701, 249, 667, 315);
  fill("black");
  line(653, 329, 613, 336);
  //left arm//
  fill("white");
  ellipse(596, 557, 65, 250);
  //right arm//
  fill("white");
  ellipse(807, 557, 65, 250);

}
