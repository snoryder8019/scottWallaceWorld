const menu = document.getElementById('menu');
const resume = document.getElementById('resPage');
const colorDiv = document.getElementById('colorDiv');
const buttonGlobe = document.getElementById('buttonGlobe');
const loadScreen = document.getElementById('loadScreen');

const intro0 = document.getElementById('introMainPage');
const loadDelay = 5000;//5000
const introMsgClear = 9000;//9000
const introduce = document.getElementById('introduce');
const domIT0=document.getElementById('domIT0');


var domITArray=[domIT0];
const tickerbar = document.getElementById('tickerbar');

function slider(){
  console.log('slider on')
 let xxy=-247;

 setInterval(function(){
   if(xxy>90){
     console.log('if logic')
     tickerbar.style.opacity="0"
     tickerbar.style.display="none";
     console.log(tickerbar.style.display);
    xxy=-270;
  
   }else{
    tickerbar.style.display="block";
    tickerbar.style.opacity="100";
  let divStr=xxy+"%";
  tickerbar.style.right=divStr;
  xxy++;
  //console.log(xxy) <---use for debugging
  } },100)
}

// const techHistoryDiv = document.getElementById('techHistoryDiv');
// const leadershipDiv = document.getElementById('leadershipDiv');
// const techSkillsDiv = document.getElementById('teckSkillsDiv');
// const backgroundDiv = document.getElementById('backgroundDiv');
// const abstractDiv = document.getElementById('abstractDiv');
// const mygoalsDiv = document.getElementById('mygoalsDiv');
// //
// const techHistory = document.getElementById('techHistory');
// const leadership = document.getElementById('leadership');
// const techSkills = document.getElementById('teckSkills');
// const background = document.getElementById('background');
// const abstract = document.getElementById('abstract');
// const mygoals = document.getElementById('mygoals');
// //
// const resumeArray= [techHistoryDiv,leadershipDiv,techSkillsDiv,backgroundDiv,abstractDiv,mygoalsDiv];
// const resumeBody= [techHistory,leadership,techSkills,background,abstract,mygoals];

// function collapse(){
//   for (i=0;i<resumeArray.length;i++){
//    var xx=resumeArray[i];
//   xx.addEventListener('click',function(){
//   var xy=resumeBody[i];
//   if(xy.style.display==="block"){
//     xy.style.display="none";
//     }else{
//       xy.style.display="block";
//     }
// });
// }

// }


let delayedAnnie = function delayedAnnie0(){
  buttonGlobe.style.display='block';
  loadScreen.style.display='none';
};
// let delayedClear = function delayedClear0(){
//   let title0 = document.getElementById('indexTitle0');
// let title1 = document.getElementById('indexTitle1');
//   title0.style.display='none';
//   title1.style.display='none';
//   intro0.style.display='block';

// }
//
//controls loading spinner
function loadScreenOn(){
  console.log('loadScreenON');
  if(loadScreen===null){}else{

  loadScreen.style.display='block';
buttonGlobe.style.display='none';
setTimeout(delayedAnnie,loadDelay);
//setTimeout(delayedClear,introMsgClear);
}
};
//
//controls masking gradients in sandbox
function maskingFunc(){
  if(colorDiv === null){}
  else{
    var inH = window.innerHeight;
    var inW = window.innerWidth;
   
  colorDiv.addEventListener('mousemove',function(){
  let x= window.event.screenX;
  let y= window.event.screenY;
   let mapX =(x/inW);
   let mapY =(y/inH);
  console.log(mapX+" "+mapY);
  colorDiv.style.background='linear-gradient(to left, rgba('+135+','+y/3+','+x/2+'), rgba('+x+',200,'+y/3+'))'
  });}

}


function menuOpen(){
  if (menu.style.left!='0vw'){
    console.log('if menuOpen()');
    menu.style.left='0vw'
    }
else{
  console.log('else menuOpen()')
  menu.style.left='-100vw'
}
};

function resPage(){
  console.log('resPage')
  if (resume.style.opacity!='100'){
    console.log('if resPage()');
      menuOpen();
  resume.style.display="block";
  resume.style.opacity="100";
  }
  else{
    resume.style.opacity="0";
    console.log('else resPage()');
  }
};


//
//event listeners called "onload" in the body
function popLoader(){
  loadScreenOn();
  maskingFunc();
 // collapse();
  //domCopy();
// canvasDraw();
slider();
console.log('listeners Added')
}
