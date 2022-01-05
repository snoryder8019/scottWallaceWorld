const menu = document.getElementById('menu');
const resume = document.getElementById('resPage');
const colorDiv = document.getElementById('colorDiv');
const buttonGlobe = document.getElementById('buttonGlobe');
const loadScreen = document.getElementById('loadScreen');
const loadDelay = 5000;
//var pageHandle = [resume,0];
// function pageCloser(){
//   for(x=0;x<pageHandle.length;x++){
//     pageHandle[x].style.opacity="0";
//   }
// };

const delayedAnnie = function delayedAnnie0(){

  buttonGlobe.style.display='block';
  loadScreen.style.display='none';
};
//
//controls loading spinner
function loadScreenOn(){
  console.log('loadScreenON');
  if(loadScreen===null){}else{
  loadScreen.style.display='block';
buttonGlobe.style.display='none';
setTimeout(delayedAnnie,loadDelay);
}
};
//
//controls masking gradients in sandbox
function maskingFunc(){
  if(colorDiv === null){}
  else{
    var inH = window.innerHeight;
    var inW = window.innerWidth;
    const e = window.event;
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
console.log('listeners Added')
}
