// Blooming Flower Animation for Someone Special 🌸

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  angleMode(DEGREES);
  frameRate(60);
}

let petals = [];
let numPetals = 12;
let bloom = 0;

function draw() {
  background(240, 248, 255);

  translate(width/2, height/2 + 30);

  // Animate bloom
  if (bloom < 1) {
    bloom += 0.01;
  }

  // Draw petals
  for (let i = 0; i < numPetals; i++) {
    let angle = map(i, 0, numPetals, 0, 360);
    push();
    rotate(angle);
    drawPetal(bloom);
    pop();
  }

  // Draw flower center
  fill(255, 200, 80, 240);
  noStroke();
  ellipse(0, 0, 60 * bloom, 60 * bloom);
}

function drawPetal(b) {
  fill(255, 120, 170, 200);
  noStroke();
  beginShape();
  vertex(0, 0);
  bezierVertex(
    20 * b, -60 * b, 
    60 * b, -60 * b,
    0, -140 * b
  );
  bezierVertex(
    -60 * b, -60 * b,
    -20 * b, -60 * b,
    0, 0
  );
  endShape(CLOSE);
}
