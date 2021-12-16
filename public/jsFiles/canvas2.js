


const canvasRef= document.getElementById('canvasRef2');
const c = document.getElementById("canvas2");
const ctx = c.getContext("2d");
function rando(){
  x= Math.round(Math.random()*225);
  return x;
}

function drawBezier(){
var bTo0=200;
var bTo1=2;
setInterval(function(){
bTo0++;
bTo1++;
  var bFrom=[rando(),rando()]
  var bTo=[bTo0/3,bTo1*3];
  var pointA=[rando()+rando(),rando()+rando()];
  var pointB=[rando()+rando(),rando()+rando()];
  var colorA='#'+rando(255)*rando(255);
  var colorB='#'+rando(255)*rando(255);

ctx.beginPath();
ctx.lineWidth = "32";
ctx.strokeStyle= colorA;
ctx.moveTo(pointA[0], pointA[1]);
ctx.bezierCurveTo(bFrom[0], bFrom[1], bTo[0], bTo[1], pointB[0], pointB[1]);
ctx.stroke();
//
ctx.beginPath();
ctx.lineWidth = "1";
//ctx.strokeStyle= colorB;
ctx.moveTo(pointA[0], pointA[1]);
ctx.lineTo(bFrom[0], bFrom[1]);
ctx.stroke();
//
ctx.beginPath();
ctx.lineWidth = "1";
//ctx.strokeStyle= colorB;
ctx.moveTo(pointB[0], pointB[1]);
ctx.lineTo(bTo[0], bTo[1]);
ctx.stroke();

canvasRef.innerHTML=" Bezier Handle Point A X:"+bFrom[0]+" Y: "+bFrom[1]+"<br> Bezier Handle Point B X: "+bTo[0]+" Y: "+bTo[1]+"<br> Point B X:"+pointB[0]+" Y:"+pointB[1]+"<br> Point A X:"+pointA[0]+" Y:"+pointA[1]+" "
},3000);
}
