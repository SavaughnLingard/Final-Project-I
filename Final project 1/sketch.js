let ballx = 300
let bally = 300
let ballsize = 40
let score = 0
let gamestate = "L1";

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('white');
if(gamestate == "L1"){
  levelOne();


}

function levelOne(){
  fill(5,98,166)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
 
  }
  ellipse(ballx,bally,ballsize,ballsize)
  fill(0)
  text(("Score: "+score),width/2,40)
text("Level 1", width/2,height-20)
textSize(20)
}