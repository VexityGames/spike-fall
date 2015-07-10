let creator = "Brendon Ho";
let developer = "Brendon Ho";

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
  
};

