var video;
var vScale = 50;
var r = 0;
var g = 0;
var b = 0;
var rotation = 0;


function setup() {
  createCanvas(1500, 800);

  videoSetup();
}

function draw() {
  background(150)
  angleMode(DEGREES)
  rectMode(CENTER);
  if (mouseY > 500) {
    vScale = 100
  }
  else {
    vScale = 50
  }
  displayVideo();
}

function displayVideo() {
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x -1 + (y * video.width))*4;
      r = video.pixels[index+0];
      g = video.pixels[index+1];
      b = video.pixels[index+2];

      var avg = (r+g+b)/3;
      if (mouseX < 400) {
        rotation += .5
      }
      else {
        rotation +=15
      }
      colorMode(RGB)
      fill(r, g, b)
      push();
      translate(x*vScale, y*vScale);
      rotate(rotation);
      noStroke();
      rect(0, 0, vScale, vScale);
      pop();
    }
  }
}

function videoSetup() {
  rectMode(CENTER);

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(1000/vScale, 800/vScale);
}
