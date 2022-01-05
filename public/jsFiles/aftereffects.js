let ae= document.getElementById('aeSlides');
var aeGroup = [
  // ***** .mp4 format only
  '../images/nye.mp4',
'../images/cq.mp4',
'../images/logos.mp4',
'../images/royal.mp4',
'../images/atSea.mp4',
'../images/royal.mp4',


];
let x=0;
function slider(){
  let aeTitlte = document.getElementById('aeTitle');
  if(x>=aeGroup.length&&x!=0){
    x=0;
    aeTitle.innerHTML=aeGroup[x];
    ae.src=aeGroup[x];
    ae.alt=aeGroup[x];
  }
else{
    aeTitle.innerHTML=aeGroup[x];
ae.src=aeGroup[x];
ae.alt=aeGroup[x];
console.log(aeGroup[x])
x++;
}
}
