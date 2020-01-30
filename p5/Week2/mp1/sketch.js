function setup() {
  // put setup code here
  createCanvas(1500, 1500);
}

function draw() {
  // put drawing code here
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(700, 300, 200, 200);
  } else {
    rect(600, 200, 200, 200);
  }
  text(mouseX + "," + mouseY,50,50)

  function mousePressed() {
    console.log(mouseX + "," + mouseY);
  }
}
