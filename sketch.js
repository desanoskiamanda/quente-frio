let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);//sorteando um numero até 400
  x = int(x);//transformando p/ número inteiro
  y = random(400);
  y = int(y);
}

function draw() {
    background("pink");
    x= x + random(-2,2);
    y= y + random(-2,2);
    let distanciaX; //cateto
    let distanciaY; //cateto
    let distancia;  //hipotenusa
    distanciaX = mouseX - x;//diferença de distancia X
    distanciaY = mouseY - y;//diferença de distancia Y
    //distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    distancia=dist(mouseX,mouseY,x,y); //função nativa para calcular distancia
    circle(mouseX,mouseY,distancia);
  
    dist(mouseX,mouseY,x,y)
    console.log(distancia);//revela o valor da hipotenusa
    
    if (mouseX == x && mouseY == y) {
        text("Encontrei!", 200, 200);
        noLoop();
    }
} 