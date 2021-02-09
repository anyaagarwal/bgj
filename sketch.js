var cat,mouse;
var readyCImage,caughtImage,runningCImage,backoImage,readyMimage,runningMimage;

function preload() { 
  readyCImage=loadImage("ready.gif");
  caughtImage=loadImage("caught.gif");
  runningCImage=loadImage("running.gif");
  backoImage=loadImage("backo.PNG");
  readyMimage=loadImage("ready m.gif");
  runningMimage=loadImage("running m.gif");
} 

function setup(){
  
    createCanvas(600,600)
    background=createSprite(500,300);
    background.scale=2.3;
    background.addImage("ashkb",backoImage);
    
    
    
  
    mouse=createSprite(500,500);
    cat=createSprite(50,500);
    cat.scale=0.4;
    mouse.addImage("yugc",readyMimage);
    mouse.addImage("yugcb",runningMimage);
    cat.addImage("yugcecf",readyCImage);
    cat.addImage("yugcecfb",runningCImage);
    cat.addImage("ashkbc",caughtImage);
}
  function draw() { 
    
    console.log(cat.width);
    console.log(mouse.width);
    
      
    if(keyDown("right_arrow")){
      cat.changeAnimation("yugcecfb",runningCImage);
      cat.scale=0.7;
      mouse.changeAnimation("yugcb",runningMimage);
      cat.velocityX=3;
      
    }
    
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2&&
     mouse.x - cat.x < mouse.width/2 + cat.width/2 && 
     cat.y - mouse.y < mouse.height/2 + cat.height/2&&
     mouse.y - cat.y < mouse.height/2 + cat.height/2){
       
      cat.changeAnimation("ashkbc",caughtImage);
      cat.velocityX=0;
      cat.scale=2;
      cat.x=300;
      cat.y=300;
      
      mouse.destroy();
    }
    
    
   
  drawSprites(); 
  }