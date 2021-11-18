const menu = document.getElementById('menu');
function menuOpen(){
  if (menu.style.left!='0vw'){
    console.log('if');
    menu.style.left='0vw'
    }
else{
  console.log('else')
  menu.style.left='-100vw'
}
}
