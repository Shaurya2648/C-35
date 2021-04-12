var hyptonicBall;
var database;
//var hyptonicBall;
var position;
function setup(){
    createCanvas(500,500);
    hyptonicBall = createSprite(250,250,10,10);
    hyptonicBall.shapeColor = "red";
database = firebase.database();
var hyptonicBallPosition = database.ref('ball/position');

hyptonicBallPosition.on("value",readPosition);
//hyptonicBallPosition.on("value",function(data){
    //position = data.val()
    //hyptonicBallPosition.x = position.x;
    //hyptonicBallPosition.y = position.y;
   // console.log(position)

//});

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
var hyptonicBallPosition = database.ref('ball/position')
hyptonicBallPosition.set({
'x': position.x+x,
'y': position.y+y
    })
}
function readPosition(data){
position = data.val()
console.log(position.x);
//hyptonicBallPosition.x = position.x;
//hyptonicBallPosition.y = position.y;
//console.log(hyptonicBallPosition.x);
//console.log(hyptonicBallPosition.x);

}