


const miniMeggase = document.getElementById('miniMeggase');
const player1 = document.getElementById('player1');
const npc1 = document.getElementById('npc1');

let PlayerMage = class {
  constructor(playerName){
  this.playerName=playerName;
  this.classType="mage";
  this.baseHP=78;
  this.baseAttack=40;
  this.baseMagic=80;
}
}
const player01 = new PlayerMage("scott", "warrior");


function playerStats(){
  console.log(player01);
  console.log(player1);
  player1.innerHTML=
  player01.playerName+"<br>"+
  player01.classType+"<br>"+
  player01.baseHP+"<br>"+
  player01.baseAttack+"<br>"
  ;
}