let creator = "Brendon Ho";
let developers = ["Brendon Ho","","";]
let helpers = ["";]
//player functions
var gravity = 0.5;
var fallSpeed = 9;
var positionX = 200;
var positionY = 0;
var charSize = 18;

//Wall Coordinates
var wallOneX = /*Add Value*/;
var wallOneY = /*Add Value*/;
var wallTwoX = /*Add Value*/;
var wallTwoY = /*Add Value*/;
var wallOneWidth = /*Add Value*/;
var wallOneHeight = /*Add Value*/;
var wallOneHeight = /*Add Value*/;
var wallTwoWidth = /*Add Value*/;
var wallTwoHeight = /*Add Value*/;

//game functions
var walls = [];

var makeWalls = function(x,y,width,height){
  walls.push({
    x: x, y: y,
    width: width, height: height
  });
};
makeWalls();
var drawWalls = function(){
  for(var each in walls) {
        walls.backgroundColor();
        .drawRect(walls[each].x, walls[each].y, walls[each].width, walls[each].height);
  }
};

var spikes = [];
var makeSpikes = function(x,y,width,height){
  
};

var movePlayer = function(){
  if(mousePressed){};
  if(positionX = 15){};

var coins = function(){
coins: o
};
