var c1, c2, r, b1, b2;

function setup() {
  createCanvas(612, 600);

  // colors fro a gradient background
  c1 = color(239, 243, 238);
  c2 = color(193, 186, 185);
  setGradient(c1, c2);
  // colors fro a gradient blue square
  b1 = color(44, 52, 134);
  b2 = color(25, 19, 99);

  r = color(238, 36, 0);




}

function draw() {
    //red
  fill(r);
  noStroke();
  rect(0,0,282,244);
  //yellow
  fill(254,219,0);
  noStroke();
  rect(0,394,57,206);
  //blue
  drawGradientSquare(284, 396, 181, b1, b2);

  drawTexture(15000);

  //linhas
  stroke('black');
  strokeWeight(9);
  line(282,0,282,600);
  filter(BLUR, 0.0001); 
  //
  strokeWeight(14);
  line(0,244,612,244);
  //
  line(0,390,612,390);
  //
  strokeWeight(8);
  line(57,390,57,612);

  strokeWeight(8);
  line(282,572,463,572);

  strokeWeight(8);
  line(465,398,465,600);
//
  noLoop();

  
}

//texture
function drawTexture(density) {
  for (let i = 0; i < density; i++) {
    let x = random(width);
    let y = random(height);
    stroke(0, random(15, 40));
    point(x, y);
  }
}

//GRADIENT
function setGradient(c1, c2) {
  for (let y = 0; y < height; y++) {
    const amount = map(y, 0, height, 0, 1);
    stroke(lerpColor(c1, c2, amount));
    line(0, y, width, y);
  }

}

function drawGradientSquare(x, y, size, c1, c2) {
  noStroke();
  fill(c1);
  square(x, y, size);

  for (let row = 0; row < size; row++) {
    const amount = map(row, 0, size, 0, 1);
    stroke(lerpColor(c1, c2, amount));
    line(x, y + row, x + size, y + row);
  }
}

