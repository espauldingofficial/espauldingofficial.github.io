//get color palette
//work out app icons
//clicking on app icon brings window with project



var colors = ['#C3E1EC','#b5dbd8', '#efc1ce', '#eea196', '#f2b799', '#eeca8b', '#afdcc5','#f1ebdd', '#343530'];

function setup() {
  createCanvas(600, 450);
  frameRate(1);
  noFill();
}

function draw() {
  clear();
  background('#C3E1EC');
  drawScreen(0);
  
  
  
  

  noLoop();
}

function drawScreen(start) {
  fill('#EFF1F3')
  rect(start+60, start+20, 360, 400, 15);
  fill('#dbddde');
  rect(start+60, start+20, 360, 28,15, 15, 0, 0);
  rect(start+60, start+48, 360, 20);
  fill('#EFF1F3')
  rect(start+100, start+52, start+315, start+12,15, 15, 15, 15);
  fill('#eea196');
  circle(start+75, start+34, 10);
  fill('#ece7c3');
  circle(start+95, start+34, 10);
  fill('#e1ecc3');
  circle(start+115, start+34, 10);
  
  fill('#000000');
  textSize(9);
  text('https://aboutcoder.com', start+105, start+61);
  
  fill('#000000');
  textSize(20);
  text('Elizabeth Spaulding', start+65, start+105);
  textSize(12);
  text('project description: what you hoped to gain/big picture', start+70, start+155);
  text('methods: programming methods, throught process, approach, how you did it', start+70, start+190, start+300);
  text('obstacles & solutions', start+70, start+255);
  text('conclusions', start+70, start+305);
  
  
  
}

function icons(){
  
}

function otherStuff(){
  background(220);
  var margin = 0;
  var width;
  var height;
  var space = 0;
  var numSquares = 2;
  var radius = width/(2*numSquares);
  
  translate(margin, margin);
  for(var y = radius; y<height; y = y + 2*radius){
    for(var x = radius; x<width; x = x + 2*radius){
      let c = color(colors[int(random(0, colors.length))]);
      let s = color('#00000000');
      stroke(s);
      
      fill(c);
      circle(x,y,2*radius);
    }
  }
}