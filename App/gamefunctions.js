let creator = "Brendon Ho";
let developers = "Brendon Ho","","";
let helpers = "";
//player functions
var gravity = 0.5;
var fallSpeed = 9;
var positionX = 200;
var positionY = 0;
var charSize = 18;

//game functions
var walls = [];

var makeWalls = function(x,y,width,height){
  walls.push({
    x: x, y: y,
    width: width, height: height
  });
};
var drawWalls = function(){
  for(var each in platforms) {
        rect(platforms[each].x, platforms[each].y, platforms[each].width, platforms[each].height);
  }
};

var spikes = [];
var makeSpikes = function(x,y,width,height){
  
};
var movePlayer = function(){
  if(mousePressed){};
};

