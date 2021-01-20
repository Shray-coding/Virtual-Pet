//Create variables here

var dog, dogImage, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(700, 700);
  dog = createSprite(400,500,50,50)
  dog.addImage(dogImage);
  dog.scale = 0.5
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  

background(46,139,87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}

  drawSprites();
  //add styles here
  textSize(50);
  fill("black")
  text("Food:"+foodS,300,150)
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }

  database.ref("/").update({
    Food:x
  })
}



