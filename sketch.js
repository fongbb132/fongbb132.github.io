var height, width; 
var color1 = ["#6988FF", "#B5C5FF","#919DCC" ];//blue
var color2 = ["#FF7069", "#FFB9B5","#CC9491" ];//red
var color3 = ["#FFD069", "#FFE8B5","#CCBA91"]; //yellow
var circles = [];
time = 0;
beginTime = 0;
numCircle = 600;
cursor = "";
function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
    width = windowWidth;
    height = windowHeight;
    background('#99CCFF');
    for(i = 0;i < numCircle;i++){
        var num = parseInt(Math.random()*3);
        var num1 = parseInt(Math.random()*3);
        var num2 = parseInt(Math.random()*3);
        var a;
        shuffle(color1);
        shuffle(color2);
        shuffle(color3);
        radiusC = Math.random()*70+80;
        if(i%3===0){
            a = new circle1(Math.random()*width,  Math.random()*height, radiusC, color1[0],color1[1],color2[2]);
        }else if(i%3==1){
            a = new circle1(Math.random()*width, Math.random()*height, radiusC, color2[0],color2[1],color2[2]);
        }else{
            a = new circle1(Math.random()*width, Math.random()*height, radiusC, color3[0],color3[1],color3[2]);
        }
        circles.push(a);
    }
    smileImg = loadImage("assets/smile.png");
    sadImg = loadImage("assets/sad.png");
    cursor = smileImg;
}

function draw() {
    time++;
  // draw stuff here
    createCanvas(windowWidth, windowHeight);
    background('#99CCFF');
    noStroke();
    if(mouseIsPressed){
        for(i = 0; i< numCircle; i++){
            xLoc = circles[i].x;
            yLoc = circles[i].y;
            distance = sqrt(pow(xLoc-mouseX, 2)+pow(yLoc-mouseY, 2));
            distance-=2;
            initAngle = atan2((yLoc-mouseY),(xLoc-mouseX));
            finalAngle = initAngle+PI/180;
            circles[i].x = cos(finalAngle)*distance+mouseX;
            circles[i].y = sin(finalAngle)*distance+mouseY;
            circles[i].xVelocity = 0;
            circles[i].yVelocity = 0;
            circles[i].xAcceleration = 0;
            circles[i].yAcceleration = 0;
        }
        cursor = sadImg;
    }        
    
    for(i = 0; i<numCircle;i++){
        updateCircle(circles[i],5);
        if(!mouseIsPressed){
            changeSize(circles[i]);
        }
        var circleX = circles[i].x;
        var circleY = circles[i].y;
        distance = sqrt(pow(circleX-mouseX,2)+pow(circleY-mouseY,2));
        if(distance<100&&!mouseIsPressed){
            if(circleX-mouseX>0){
                circleX+=100;
            }else{
                circleX-=100;
            }
            if(circleY-mouseY>0){
                circleY+=100; 
            }else{
                circleY-=100;
            }
        }
        var circleRadius = circles[i].radius;
        var circleColor1 = circles[i].color1;
        var circleColor2 = circles[i].color2;
        var circleColor3 = circles[i].color3;
        fill(circleColor1);
        ellipse(circleX, circleY, circleRadius, circleRadius);
        fill(circleColor2);
        ellipse(circleX, circleY, circleRadius/3*2, circleRadius/3*2);
        fill(circleColor3);
        ellipse(circleX, circleY, circleRadius/3, circleRadius/3);        
    }
    image(cursor, mouseX-50 ,mouseY-50, 100,100);

}

function rect1(x, y, w, h, angle){
    var A = angle/180*PI;
    var ULx  =  x + ( w / 2 ) * cos (A) - ( h / 2 ) * sin (A);
    var ULy =  y + ( h / 2 ) * cos (A)  + ( w / 2 ) * sin (A);
    var URx =  x - ( w / 2 ) * cos (A) - ( h / 2 ) * sin (A);
    var URy = y + ( h / 2 ) * cos (A)  - ( w / 2 ) * sin (A);
    var BLx =   x + ( w / 2 ) * cos (A) + ( h / 2 ) * sin (A);
    var BLy = y - ( h / 2 ) * cos (A) + ( w / 2 ) * sin (A);
    var BRx =  x - ( w / 2 ) * cos (A) + ( h / 2 ) * sin (A);
    var BRy = y - ( h / 2 ) * cos (A)  - ( w / 2 ) * sin (A);
    
    var midX = 0;
    var midY = 0;
    if(angle>180){
        midX = (BRx+BLx)/2;
        midY = (BRy+BLy)/2;
    }else{
        midX = (URx+ULx)/2;
        midY = (URy + ULy)/2;
        
    }
    stroke(0,0,0);
    ellipse(midX, midY, h/4, h/4);
    noStroke();
    color(256,256,256);
    beginShape();
    
    vertex(BRx, BRy);
    vertex(BLx, BLy);
    vertex(ULx, ULy);
    vertex(URx, URy);
    
    endShape();
}

function mouseReleased(){
    for(i = 0; i<circles.length;i++){
        if(abs(mouseX-circles[i].x)<3&&abs(mouseY-circles[i].y)<3){
            angle = atan2(circles[i].y-mouseY, mouseX-circles[i].x-mouseX);
            
            circles[i].xVelocity = 50*cos(angle)*(Math.random()*2+0.5);
            if(cos(angle)>0){
                circles[i].xAcceleration = -1;
            }else{
                circles[i].xAcceleration = 1;
            }
            circles[i].yVelocity = 50*sin(angle)*(Math.random()*2+0.5);
            if(sin(angle)>0){
                circles[i].yAcceleration = -1;
            }else{
                circles[i].yAcceleration = 1;
            }
        }else{
            angle = Math.random()*2*PI;
            circles[i].xVelocity = 50*cos(angle)*(Math.random()*2+0.5);
            if(cos(angle)>0){
                circles[i].xAcceleration = -1;
            }else{
                circles[i].xAcceleration = 1;
            }
            circles[i].yVelocity = 50*sin(angle)*(Math.random()*2+0.5);
            if(sin(angle)>0){
                circles[i].yAcceleration = -1;
            }else{
                circles[i].yAcceleration = 1;
            }
        }
    }
    cursor = smileImg;
    beginTime = time;
}

function updateCircle(circle1, time1){
    
    if(circle1.x > width-15||circle1.x<15){
        if(circle1.x>width-15){
            circle1.x = width-16;
        }
        if(circle1.x<15){
            circle1.x=16;
        }
        circle1.xVelocity = -1*circle1.xVelocity;
        circle1.xAcceleration = -1*circle1.xAcceleration;
    }
    if(circle1.y > height-15||circle1.y<15){
        if(circle1.y>height-15){
            circle1.y = height-16;
        }
        if(circle1.y<15){
            circle1.y=16;
        }
        circle1.yVelocity = -1*circle1.yVelocity;
        circle1.yAcceleration = -1*circle1.yAcceleration;
    }
    
    var xVel = circle1.xVelocity;
    var yVel = circle1.yVelocity;
    
    xAcc = circle1.xAcceleration;
    yAcc = circle1.yAcceleration;
    
    xVel = xVel + time1*xAcc*0.06;
    yVel = yVel + time1*yAcc*0.06;
    
    if(xVel<10 && xVel>-10){
        xVel = 0;
    }
    if(yVel<10 && yVel >-10){
        yVel = 0;
    }
    
    if(xVel>60){
        xVel=60;
    }
    if(xVel<-60){
        xVel = -60;
    }
    if(yVel > 60){
        yVel = 60;
    }
    if(yVel<-60){
        yVel = -60;
    }
    circle1.xVelocity = xVel;
    circle1.yVelocity = yVel;
    
    circle1.x = circle1.x + xVel*time1*0.1;
    circle1.y = circle1.y + yVel*time1*0.1;
}

function changeSize(circle1){
    if(circle1.radius>circle1.max){
        circle1.inOrDec=true;
    }
    if(circle1.radius<circle1.min){
        circle1.inOrDec=false;
    }
    if(circle1.inOrDec){
        circle1.radius-=0.2;
    }else{
        circle1.radius+=0.2;
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}


function circle1(xCoor, yCoor, radius, color1, color2, color3){
    this.x = xCoor;
    this.y = yCoor;
    this.radius = radius;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.xAcceleration = 0;
    this.yAcceleration = 0;
    this.max = radius+10;
    this.min = radius-10;
    this.incOrDec = true;
}
