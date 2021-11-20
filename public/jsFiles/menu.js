const menu = document.getElementById('menu');
const resume = document.getElementById('resPage');
  const colorDiv = document.getElementById('colorDiv');
var pageHandle = [resume,0];
// function pageCloser(){
//   for(x=0;x<pageHandle.length;x++){
//     pageHandle[x].style.opacity="0";
//   }
// };
function popLoader(){
  var inH = window.innerHeight;
  var inW = window.innerWidth;
  const e = window.event;
colorDiv.addEventListener('mousemove',function(){
var x= window.event.screenX;
var y= window.event.screenY;
var mapX =(x/inW);
var mapY =(y/inH);
console.log(mapX+" "+mapY)
colorDiv.style.background='linear-gradient(to left, rgba('+135+','+y/3+','+x/2+'), rgba('+x+',200,'+y/3+'))'
});
}

function menuOpen(){
  if (menu.style.left!='0vw'){
    console.log('if');
    menu.style.left='0vw'
    }
else{
  console.log('else')
  menu.style.left='-100vw'
}
};

function resPage(){
  if (resume.style.opacity!='100'){
    console.log('if Res');
      menuOpen();
  resume.style.display="block";
  resume.style.opacity="100";
  }
  else{
    resume.style.opacity="0";
    console.log('else Res');
  }
};
