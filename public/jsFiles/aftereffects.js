let ae= document.getElementById('aeSlides');
var aeGroup = [
'../images/cq.mp4',
'../images/logos.mp4',
'../images/royal.mp4',
'../images/nye.mp4',
'../images/globe.gif',
];
let x=0;
function slider(){
  if(x>aeGroup.length){
    x=0;
    ae.src=aeGroup[x];
    ae.alt=aeGroup[x];
  }
else{
ae.src=aeGroup[x];
ae.alt=aeGroup[x];
console.log(aeGroup[x])
x++;
}
}
