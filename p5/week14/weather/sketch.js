var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temp = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=375b51e48d85acb678a266339bfc5aed'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.



}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temp= weather.main.temp;
}




function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(33, 175, 194);
      fill("black");
      text("we have weather", 20, 20);
      // parse the weather object and put some text or images using at least 3 different weather data!
      text("the weather is: " + weather.main.temp, 20, 40);
      text("the humidity is: " + weather.main.humidity, 20, 60);
      text("the wind speed is: " + weather.wind.speed, 20, 80)

      fill("white");
      noStroke();
      ellipse(x, 250, 200, 100);
      x = x + ws/3 ;
      if(x > width) x = 0 ;

      fill("red");
      var tmp = 0;
      tmp = map(temp, -10, 90, 2, height-10);
      rect(width-50, height-10, 30, -tmp);
      ellipse(width-35, height-10, 50, 50);

      break;

  }
}
