function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#0C0C0C");
  fill("#F4BA03");
  circle(200, 200, 300); // rosto
  fill("#673AB7");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(245, 270, 150, 270); // boca
  fill("#F80A0A");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(227, 92, 275, 121); // sobrancelha esquerda
  line(158, 101, 120, 119); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
