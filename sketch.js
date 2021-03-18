var canvas;
var music;
var ball,edges
var b1,b2,b3,b4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  b1=createSprite(0,580,360,30)
  b1.shapeColor=color(0,0,255)
  b2=createSprite(295,580,200,30)
  b2.shapeColor=color(255,128,0)
  b3=createSprite(515,580,200,30)
  b3.shapeColor=color(153,0,76)
  b4=createSprite(740,580,280,30)
  b4.shapeColor=color(0,100,0)

ball=createSprite(random(20,750),100,40,40)
ball.shapeColor=color(255,255,255)
ball.velocityY=9
ball.velocityX=4 
//create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor=color(0,0,255)
    music.play()
    }
    if(b2.isTouching(ball) && ball.bounceOff(b2)){
        ball.shapeColor=color(255,128,0)
    music.play()
    }  
    if(b3.isTouching(ball) && ball.bounceOff(b3)){
        ball.shapeColor=color(153,0,76)
    music.play()
    }
    if(b4.isTouching(ball) && ball.bounceOff(b4)){
        ball.shapeColor=color(0,100,0)
    music.play()
    }
    
    drawSprites();
    
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
