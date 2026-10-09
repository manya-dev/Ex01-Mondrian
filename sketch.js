function setup() {
  createCanvas(612, 600);
  background(236, 240, 234);

  let r = color(238, 36, 0);

  //formas
  fill(r);
  noStroke();
  rect(0, 0, 282, 244);
  //
  fill(254, 219, 0);
  noStroke();
  rect(0, 394, 57, 206);
  //
  fill(34, 30, 114);
  noStroke();
  rect(284, 396, 181, 172);


  //linhas
  stroke('black');
  strokeWeight(9);
  line(282, 0, 282, 600);
  //
  strokeWeight(14);
  line(0, 244, 612, 244);
  //
  line(0, 390, 612, 390);
  //
  strokeWeight(8);
  line(57, 390, 57, 612);
//
}

