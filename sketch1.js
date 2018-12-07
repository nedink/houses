function house1() {
  const width = 32;
  const height = 32;
  const pixels = [];

  for (r = 0; r < width; r++) {
    const row = [];
    for (c = 0; c < height; c++) {
      row.push(null);
    }
    pixels.push(row);
  }

  const b1 = {
    w: () => 16 + Math.floor(Math.random(4)),
    h: () => 16 + Math.floor(Math.random(4))
  };

  for (r = 6; r < b1.h() - 6; r++) {
    for (c = 6; c < b1.w() - 6; c++) {
      pixels[r][c] = 255;
    }
  }

  // for (r = 2; r < 2 + b1.h(); r++) {
  //   for (c = 0; c < b1.w(); c++) {
  //     pixels[r][c] = 255;
  //   }
  // }

  return pixels;
}

const houses = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  for (i = 0; i < 10; i++) {
    houses.push(house1());
  }

  print(houses);
}

function draw() {
  translate(width / 2, height / 2);

  let r = 0;
  houses.forEach(row => {
    let c = 0;
    row.forEach(col => {
      if (col === undefined || col === null) return;
      stroke(col);
      fill(col);
      rect(c * 16, r * 16, 16, 16);
      c++;
    });
    r++;
  });
}
