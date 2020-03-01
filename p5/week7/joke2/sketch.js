var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas (800,800);
}

function draw() {
  // put drawing code here
  background ("blue");
  textSize(25);

  switch(myState){
    case 0:
      text("I invented a new word", 350,400);
      timer++;
      if (timer > 200){
        myState = 1;
        timer = 0;
      }
    break;

    case 1:
      text("PLAGARISM", 350,400);
      timer++;
      if (timer > 200){
        myState = 0;
        timer = 0;
      }
    break;

  }

}
