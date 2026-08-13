/* VARIABLES */
let eyeWidth = 50
let eyeHeight = 40
let pupilWidth = 22
let pupilHeight = 25
let toggle = false
let mouseCounter = 0

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400);

  //sets the background color
  background(225, 186, 255);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Hair
  fill(0)
  ellipse(width/2, height/2.25, 195, 200);
  ellipse(width/3, height/1.5, 75, 95);
  ellipse(width/1.5, height/1.5, 75, 95);
  
  //Face
  fill(230, 194, 172)
  ellipse(width/2, height/2, 175, 200);

  //Blush
  fill(248, 159, 252)
  ellipse(140,210,40,25)
  ellipse(253,210,40,25)
  //Eyes
  if (toggle==true){
    fill(0)
    ellipse(170,170,eyeWidth,eyeHeight/8)
    ellipse(230,170,eyeWidth,eyeHeight/8)
  }else if(toggle ==false){
    //eyes open
    fill(143, 135, 111)
  
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
    
    fill(41, 40, 32)
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);

  }

  //Nose
  fill(230, 194, 172)
  triangle(190,220,200,200,210,220)
  //Mouth
  fill(245, 125, 171)
  arc(200, 230, 50, 50, 0, 180);

  //Text
  fill(0,0,0)
  textSize(15);
  text('We will customize this \ntext later on in the \nproject to reflect your avatar.', 20, 20);
  
  //Text at the Bottom
  fill(0,0,0);
  textSize(12)
  text('Click to see me close my eyes.\nClick again to see me open them',180,370);
}

/*Functions*/

function mousePressed(){ 
  mouseCounter++
  toggle=!toggle
  return false
} // used mousedPressed the event function instead of mouseIsPressed module
