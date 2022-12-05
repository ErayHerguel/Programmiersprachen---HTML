var r;
var g;
var b;
var a;

function setup() 
{
  createCanvas(600, 600);
}

function grid(numX, numY, size)
{
  for (let x = 0; x < numX; x++) 
  {
    for (let y = 0; y < numY; y ++) 
    {
      circle(x*size/2, y*size/2, size/2);
    }
  }
}

function draw() 
{ 
  background(255);
  
  r = random(255);
  g = random(100,200);
  b = random(100);
  a = random(200,255);
  
  fill(r, g, b, a);
  grid(100, 100, 30);
}
