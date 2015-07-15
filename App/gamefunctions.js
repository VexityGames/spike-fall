let creator = "Brendon Ho";
let developers = ["Brendon Ho","Peter Soboyejo","";]
let helpers = ["Rahul Nadakumar";]
//player functions
var gravity = 0.5;
var fallSpeed = 9;
var positionX = 200;
var positionY = 0;
var charSize = 18;

var canvas = document.getElementById("rect");
var context = canvas.getContext("2d");

context.beginPath();
context.fillRect(100,100,100,100);
context.color = yellow;
