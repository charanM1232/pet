//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogimg, dogimg1;

function preload()
{
  //load images here
dogimg = loadImage("images/dogImg.png");
dogimg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale = 0.3;
  

    foodStock = database.ref('food');
    foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg1);
}
  drawSprites();
  //add styles here
  fill("black");
  textSize(20);
  text("food remaining"+ foodS,170,50);

}


function readStock(data){
foodS = data.val();

}
function writeStock(x){
  if(x<0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food:x

  })
}
