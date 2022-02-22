


const canvasRef= document.getElementById('canvasRef');
const c = document.getElementById("canvas0");
const ctx = c.getContext("2d");
function rando(){
  x= Math.round(Math.random()*225);
  return x;
}




function drawBezier(){
  let startPoint = [50,40];
let bez11=[20,10];
let bez12=[10,40];
let connect1=[50,61];
let bez21=[60,61];
let bez22=[90,105];
let connect2=[10,75];
let bez31=[220,221];
let bez32=[220,221];
let connect3=[200,200];
  console.log(
    window.event.mouseX + " "+ window.event.mouseY +" \n"+
    rando()+"\n"+
    "width:"+c.width+" "+"height:"+c.height)
  var colorA='#'+rando(255)*rando(255);
  var colorB='#'+rando()*rando();
 ctx.lineCap="round";
  ctx.beginPath();
  ctx.lineWidth = "18";
  ctx.strokeStyle= colorA;
  ctx.moveTo(startPoint[0],startPoint[1]);
  ctx.bezierCurveTo(bez11[0],bez11[1], bez12[0],bez12[1], connect1[0],connect1[1]);
  ctx.moveTo(connect1[0],connect1[1]);

  ctx.bezierCurveTo(bez21[0],bez21[1], bez22[0],bez22[1], connect2[0],connect2[1]);
  // ctx.moveTo(connect2[0],connect2[1]);
  // ctx.bezierCurveTo(bez31[0],bez31[1], bez32[0],bez32[1], connect3[0],connect3[1]);
  ctx.stroke();




//
// ctx.beginPath();
// ctx.lineWidth = "1";
// //ctx.strokeStyle= colorB;
// ctx.moveTo(connect1[0],connect1[1]);
// ctx.lineTo(bez21[0],bez21[1]);


//
// ctx.beginPath();
// ctx.lineWidth = "1";
// //ctx.strokeStyle= colorB;
// ctx.moveTo(pointB[0], pointB[1]);
// ctx.lineTo(bTo[0], bTo[1]);
// ctx.stroke();

//canvasRef.innerHTML=" Bezier Handle Point A X:"+bFrom[0]+" Y: "+bFrom[1]+"<br> Bezier Handle Point B X: "+bTo[0]+" Y: "+bTo[1]+"<br> Point B X:"+pointB[0]+" Y:"+pointB[1]+"<br> Point A X:"+pointA[0]+" Y:"+pointA[1]+" "
}

