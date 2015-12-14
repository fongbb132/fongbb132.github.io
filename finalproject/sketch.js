var height, width; 
var pictures = [];
var time = 0;
var beginTime = 0;
var state = 0;
var counter = 0;
var paper1;
var paper2;
function setup() {
    createCanvas(windowWidth, windowHeight);
    width = windowWidth;
    height = windowHeight;
    background = loadImage('data/picture/background.png');
    image(background, 0,0);
    paper1 = loadSound('data/sound/paper1.wav');
    paper2 = loadSound('data/sound/paper2.wav');
    img1  = loadImage("data/picture/original.png");
    img = loadImage("data/picture/"+0+".png");
    
    var ratio = 5922/width*2;
    var ratio1 = 5922/width*2*0.6;
    var widthOffset = width/4;
    var heightOffset = (height-2400/ratio1)/2;
    for(var i = 0; i<35;i++){
        img = loadImage("data/picture/"+i+".png");
        var puz;
        
        switch(i){
            case 0:
                puz = new puzzle(img,0/ratio, 0/ratio);
                break;
            case 1:
                puz = new puzzle(img,(523)/ratio, 0);
                break;
            case 2:
                puz = new puzzle(img,(1667)/ratio, 0);
                break;
            case 3:
                puz = new puzzle(img,(2235)/ratio, 0);
                break;
            case 4:
                puz = new puzzle(img,(3374)/ratio, 0);
                break;
            case 5:
                puz = new puzzle(img,(3928)/ratio, 0);
                break;
            case 6:
                puz = new puzzle(img,(5066)/ratio, 0);
                break;
            case 7:
                puz = new puzzle(img,0/ratio, 737/ratio);
                break;
            case 8:
                puz = new puzzle(img,(814.0)/ratio, 460.00/ratio);
                break;
            case 9:
                puz = new puzzle(img,(1378.00)/ratio, 737.00/ratio);
                break;
            case 10:
                puz = new puzzle(img,2525.00 /ratio, 459/ratio);
                break;
            case 11:
                puz = new puzzle(img,3085.00/ratio, 738.00/ratio);
                break;
            case 12:
                puz = new puzzle(img,4217.00/ratio, 460.00/ratio);
                break;
            case 13:
                puz = new puzzle(img,4778.00 /ratio, 738.0/ratio);
                break;
            case 14:
                puz = new puzzle(img,2.00 /ratio, 1279/ratio);
                break;
            case 15:
                puz = new puzzle(img,(523.00)/ratio, 1556.00 /ratio);
                break;
            case 16:
                puz = new puzzle(img,1667.00/ratio, 1279.00/ratio);
                break;
            case 17:
                puz = new puzzle(img,2235.00/ratio, 1556.0/ratio);
                break;
            case 18:
                puz = new puzzle(img,3374.00/ratio, 1277.0/ratio);
                break;
            case 19:
                puz = new puzzle(img,3928.00 /ratio, 1556.00/ratio);
                break;
            case 20:
                puz = new puzzle(img,5066.0/ratio, 1277/ratio);
                break;
            case 21:
                puz = new puzzle(img,0/ratio, 2380/ratio);
                break;
            case 22:
                puz = new puzzle(img,814.00/ratio, 2099/ratio);
                break;
            case 23:
                puz = new puzzle(img,1378.00 /ratio, 2380/ratio);
                break;
            case 24:
                puz = new puzzle(img,2525.0/ratio, 2103/ratio);
                break;
            case 25:
                puz = new puzzle(img,3085.00/ratio, 2382/ratio);
                break;
            case 26:
                puz = new puzzle(img,4217.00/ratio, 2103/ratio);
                break;
            case 27:
                puz = new puzzle(img,4778.0/ratio, 2382/ratio);
                break;
            case 28:
                puz = new puzzle(img,0/ratio, 2922/ratio);
                break;
            case 29:
                puz = new puzzle(img,528.0/ratio, 3200/ratio);
                break;
            case 30:
                puz = new puzzle(img,1667.00/ratio, 2922/ratio);
                break;
            case 31:
                puz = new puzzle(img,2235.00/ratio, 3200.00/ratio);
                break;
            case 32:
                puz = new puzzle(img,3374.00/ratio, 2921/ratio);
                break;
            case 33:
                puz = new puzzle(img,3927.00/ratio,3199/ratio);
                break;
            case 34:
                puz = new puzzle(img,5067.00/ratio, 2921.00/ratio);
                break;
                    
            default:
                puz = new puzzle(img,(414.5-414.5)/ratio, 0);
                break;
        }
        puz.x = puz.x+widthOffset;
        puz.y = puz.y + heightOffset;
        puz.currentX = puz.currentX+widthOffset;
        puz.currentY = puz.currentY + heightOffset;
        puz.targetX = puz.currentX+(i%7-3)*(width/17.5);
        puz.targetY = puz.currentY+(Math.floor(i/7)-2)*(height/12.5);
        pictures.push(puz);
    }
}

function draw() {
    image(background, 0,0);
    var ratio = 5922/width*2*0.6;
    var widthOffset = width/4;
    var heightOffset = (height-img1.height/ratio)/2;
    for(var a = 0; a<35;a++){
        pictures[a].update();
    }
    if(state == 0){
        image(img1,widthOffset, heightOffset, img1.width/ratio, img1.height/ratio );
    }
    else if(state == 1){
        image(img1,widthOffset, heightOffset, img1.width/ratio, img1.height/ratio );
        if(counter<35){
            counter+=0.1;
            var counter1 = Math.floor(counter);
            for(var i = 0; i < counter1;i++){
                image(pictures[i].img,pictures[i].currentX,pictures[i].currentY, pictures[i].img.width/ratio, pictures[i].img.height/ratio);
            }
            if (paper1.isPlaying() ) { 
            } else {
                paper1.play();
            }
        }else{
            for(var i = 0; i < 35;i++){
                image(pictures[i].img,pictures[i].currentX,pictures[i].currentY, pictures[i].img.width/ratio, pictures[i].img.height/ratio);
            }
        }
    }
    else if(state == 2||state==3){
        for(var i = 0; i < 35;i++){
            image(pictures[i].img,pictures[i].currentX,pictures[i].currentY, pictures[i].img.width/ratio, pictures[i].img.height/ratio);
        }
    }else if(state == 4 ){
        var finish = true;
        for(var b = 0; b <35; b++){
            if(Math.abs(pictures[b].currentX - pictures[b].x)>4||Math.abs(pictures[b].currentY - pictures[b].y)>4){
                finish = false;
            }
        }
        if(finish && counter>0){
            image(img1,widthOffset, heightOffset, img1.width/ratio, img1.height/ratio );
            counter-=0.1;
            var counter1 = Math.floor(counter);
            for(var i = 0; i < counter1;i++){
                image(pictures[i].img,pictures[i].currentX,pictures[i].currentY, pictures[i].img.width/ratio, pictures[i].img.height/ratio);
            }
            if (paper1.isPlaying() ) { 
            } else {
                paper1.play();
            }
        }else if(!finish){
            for(var i = 0; i < 35;i++){
                image(pictures[i].img,pictures[i].currentX,pictures[i].currentY, pictures[i].img.width/ratio, pictures[i].img.height/ratio);
            }
        }else{
            image(img1,widthOffset, heightOffset, img1.width/ratio, img1.height/ratio );
        }
    }
}

function puzzle(path,xLoc, yLoc){
    this.x = xLoc;
    this.y = yLoc;
    this.img = path;
    this.currentX = xLoc;
    this.currentY = yLoc;
    this.targetX = 0;
    this.targetY = 0;
    
    this.update = function(){
        if(state==1){
            if(Math.abs(this.currentX - this.x)>4){
                if(this.currentX>this.x){
                    this.currentX -= 4.5;
                }else if(this.currentX < this.x){
                    this.currentX += 4.5;
                }
            }
            if(Math.abs(this.currentY-this.y)>4){
                if(this.currentY>this.y){
                    this.currentY -= 4.5;
                }else if(this.currentY<this.y){
                    this.currentY += 4.5;
                }
            }
        }
        if(state == 2){
            if(Math.abs(this.currentX - this.targetX)>4){
                if(this.currentX>this.targetX){
                    this.currentX -= 4.5;
                }else if(this.currentX < this.targetX){
                    this.currentX += 4.5;
                }
                
                if (paper2.isPlaying() ) { 
                } else {
                    paper2.play();
                }
            }else{
                if (paper2.isPlaying() ) { 
                    paper2.stop();
                }
            }
            if(Math.abs(this.currentY-this.targetY)>4){
                if(this.currentY>this.targetY){
                    this.currentY -= 4.5;
                }else if(this.currentY<this.targetY){
                    this.currentY += 4.5;
                }
                if (paper2.isPlaying() ) { 
                } else {
                    paper2.play();
                }
            }else{
                if(paper2.isPlaying()){
                    paper2.stop();
                }
            }
        }else if(state == 3){
            var centerX = width/2;
            var centerY = height/2;

            var angle = atan2(this.currentY-mouseY, this.currentX-mouseX);
            var distance = sqrt(pow(this.currentX-mouseX,2)+pow(this.currentY-mouseY,2));
            angle += 0.01;
            this.currentX = distance*cos(angle)+mouseX;
            this.currentY = distance*sin(angle)+mouseY;
            if (paper2.isPlaying() ) { 
            } else {
                paper2.play();
            }
        }else if(state == 4){
            if(Math.abs(this.currentX - this.x)>4){
                if(this.currentX>this.x){
                    this.currentX -= 4.5;
                }else if(this.currentX < this.x){
                    this.currentX += 4.5;
                }
            }
            if(Math.abs(this.currentY-this.y)>4){
                if(this.currentY>this.y){
                    this.currentY -= 4.5;
                }else if(this.currentY<this.y){
                    this.currentY += 4.5;
                }
            }
        }
    }
    
}

function mouseClicked() {
  state++;
  if(state > 4){
      state = 1;
  }
}
