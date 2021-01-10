//Create variables here
var dog, dogImg,dogImg2;
var foodS, foodStock
var database
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
   dog = createSprite(400,400,30,40)
   dog.addImage(dogImg)
   dog.scale = 0.4

   foodStock = database.ref("food")
   foodStock.on("value",readStock)
}


function draw() {  
  readStock()

  text("food remaining:"+foodS,174,200)

  if(KeyWentDown(Up_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg2)
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS.data(value)
}
function writeStock(x){
 if(x<=0){
   x=0
 }else{
   x=x-1
 }
 database.ref("/").update({
   
 })
}


