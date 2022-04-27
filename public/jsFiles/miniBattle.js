const battleMenuBtn = document.getElementById('battleMenuBtn');
const battleMenu = document.getElementById('battleMenu');
const bmRegister= document.getElementById('bmRegister');
const bmSelect= document.getElementById('bmSelect');
const bmFind= document.getElementById('bmFind');
const bmFight = document.getElementById('bmFight');
let bmMenu = [bmRegister,bmSelect,bmFind,bmFight];

function battleMenuOpen(){
  console.log('bm')
  if (battleMenu.style.left!='0vw'){
    console.log('if menuOpen()');
    battleMenu.style.left='0vw'
    }
else{
  console.log('else menuOpen()')
  battleMenu.style.left='-100vw'
}
};
function battleFunction(xxy){

if(xxy.style.display=="block"){
  xxy.style.display="none";
}else{
  for (let y=0;y<bmMenu.length;y++){
    bmMenu[y].style.display="none";
    xxy.style.border="none";
   }
xxy.style.display="block";

}
}