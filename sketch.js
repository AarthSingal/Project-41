const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var Batman;
var thunder,thunderImg;

 function preload(){
  thunderImg = loadImage("thunder1.png"); 
  thunderImg2 = loadImage("thunder2.png");
 }
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(950,500);
 Batman = new Umbrella(400, 400, 100 , 100);
 thunder = createSprite(600,20,10,40);
 thunder.addImage("1st",thunderImg);
 thunder.addImage("2nd",thunderImg2);
 
}

function draw() {
  Engine.update(engine);

  background("black");
  

  if(frameCount % 10 === 0){
     var raindrop = new RainDrops(random(0, displayWidth), -100,10);
    raindrops.push(raindrop);
  }
  if(frameCount % 25 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunder.changeImage("1st",thunderImg);
               thunder.scale = 2.5;
               console.log("I am in case 1");
                break;
        case 2:thunder.changeImage("2nd",thunderImg2);
               thunder.scale = 2;
               console.log("I am in case 2");
                break;
         default: break;
      }
    }   
    

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(20);
    raindrops[i].display();
  }
  Batman.display(); 
  drawSprites();
}