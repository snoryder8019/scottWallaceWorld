


const canvasRef= document.getElementById('canvasRef');
const c = document.getElementById("canvas0");
const ctx = c.getContext("2d");
function rando(){
  x= Math.round(Math.random()*125);
  return x;
}

function drawBezier(){

setInterval(function(){

  var bFrom=[rando(),rando()]
  var bTo=[10,10];
  var pointA=[rando()+rando(),rando()+rando()];
  var pointB=[rando()+rando(),rando()+rando()];
  var colorA='#'+rando()*rando();
  var colorB='#'+rando()*rando();

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
