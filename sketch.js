class Box {
  constructor(x, y, z, w, h) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
  }
}

class RoofForward {
  constructor(x, y, z, w, h, bow) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.bow = bow;
  }
}
class RoofSideways {
  constructor(x, y, z, w, h, bow) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.bow = bow;
  }
}
class PipeRoof {
  constructor(x, y, z, w, h, bow) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.bow = bow;
  }
}

function genBox() {
  const box = new Box(
    Math.floor(10 + Math.random() * 6),
    Math.floor(10 + Math.random() * 6),
    Math.floor(Math.random() * 10),
    Math.floor(3 + Math.floor(Math.random() * 10) / 2) * 2 - 1, // make odd
    4 + Math.floor(Math.random() * 10)
  );
  return box;
}

const scale = 32;
const box1 = genBox();
const box2 = genBox();

function drawBox(box) {
  stroke(160, 138, 109);
  fill(160, 138, 109);
  rect(box.x * scale, box.y * scale, box.w * scale, box.h * scale);
}

function drawGable(box) {
  let y = box.y;
  for (x = box.x - 2; x < box.x - 2 + box.w / 2 + 2; x++) {
    stroke(101, 85, 107);
    fill(101, 85, 107);
    rect(x * scale, y * scale, scale, scale);
    if (x < box.x - 2 + box.w / 2 + 2 - 1) {
      rect((x + 1) * scale, y * scale, scale, scale);
    }
    stroke(160, 138, 109);
    fill(160, 138, 109);
    for (i = x + 2; i < box.x - 2 + box.w / 2 + 2; i++) {
      rect(i * scale, y * scale, scale, scale);
    }
    y--;
  }
  y = Math.ceil(box.y - box.w / 2 - 2);
  for (x = box.x + Math.floor(box.w / 2 + 2 - 2); x < box.x + box.w + 2; x++) {
    stroke(160, 138, 109);
    fill(160, 138, 109);
    for (i = box.x + Math.floor(box.w / 2 + 2 - 2); i < x; i++) {
      rect(i * scale, y * scale, scale, scale);
    }
    stroke(101, 85, 107);
    fill(101, 85, 107);
    rect(x * scale, y * scale, scale, scale);
    if (x > box.x + Math.floor(box.w / 2 + 2 - 2)) {
      rect((x - 1) * scale, y * scale, scale, scale);
    }
    y++;
  }
}

function drawRoof(box) {
  const height = 4 + Math.floor(Math.random() * 4);
  stroke(101, 85, 107);
  fill(101, 85, 107);
  rect(
    (box.x - 1) * scale,
    (box.y - height) * scale,
    (box.w + 2) * scale,
    height * scale
  );
}

function drawChimney(box) {
  const x = box.x + Math.floor(Math.random(box.w));
  const y = box.y - (6 + Math.floor(Math.random() * 6));
  stroke(101, 85, 107);
  fill(101, 85, 107);
  rect(x * scale, y * scale, scale, 10 * scale);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  // console.log(box1.z);
  // console.log(box2.z);

  // draw

  // box

  const gable = box1.z > box2.z;
  let box = box1;

  drawBox(box);
  drawRoof(box);

  box = box2;

  // if (Math.random() < 0.3) drawChimney(box);
  // if (Math.random() < 0.1) drawChimney(box);
  drawBox(box);
  drawGable(box);
}

function draw() {}
