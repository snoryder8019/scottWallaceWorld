const miniMessage = document.getElementById('miniMessage');
const miniGameScore = document.getElementById('miniGameScore');
const miniGame = document.getElementById('miniGame');
const StartButt = document.getElementById('startButt');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const sq0 = document.getElementById('sq0');
const sq1 = document.getElementById('sq1');
const sq2 = document.getElementById('sq2');
const sq3 = document.getElementById('sq3');
const sq4 = document.getElementById('sq4');
const sq5 = document.getElementById('sq5');
const sq6 = document.getElementById('sq6');
const sq7 = document.getElementById('sq7');
const sq8 = document.getElementById('sq8');
const sqArray = [sq0,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8];
let firstPlayer = 0;
let player1Score = 0;
let player2Score = 0;

function gameReset(){
  miniMessage.innerHTML="player 1 Go!"
  firstPlayer=0;
  for (let i=0;i<sqArray.length;i++){
    sqArray[i].innerHTML="";
    }
 
}
function resetScore(){
  player1Score=0;
  player2Score=0;
}
function gameStart(){
  miniMessage.innerHTML="player 1 Go!"
   console.log('gameStart Inititated'+" firstPlayer:"+firstPlayer+" "+typeof(firstPlayer));
  /////
    firstPlayer=0;
    startButt.innerHTML="Player 1 is X, Player 2 is O";
for (let i=0;i<sqArray.length;i++){
  sqArray[i].addEventListener("click",function(){
    if (firstPlayer===0){
       window.event.target.innerHTML="X";
    firstPlayer=1;
    miniMessage.innerHTML="player 2 Go!";
  }else{
    window.event.target.innerHTML="O";
   firstPlayer=0;
   miniMessage.innerHTML="player 1 Go!";
  }
   });}

  miniGame.addEventListener("click", function(){
    if(sq0.innerHTML==="X"&&sq1.innerHTML==="X"&&sq2.innerHTML==="X"||
      sq3.innerHTML==="X"&&sq4.innerHTML==="X"&&sq5.innerHTML==="X"||
      sq6.innerHTML==="X"&&sq7.innerHTML==="X"&&sq8.innerHTML==="X"||
      sq0.innerHTML==="X"&&sq3.innerHTML==="X"&&sq6.innerHTML==="X"||
      sq1.innerHTML==="X"&&sq4.innerHTML==="X"&&sq7.innerHTML==="X"||
      sq2.innerHTML==="X"&&sq5.innerHTML==="X"&&sq8.innerHTML==="X"||
      sq2.innerHTML==="X"&&sq4.innerHTML==="X"&&sq6.innerHTML==="X"||
      sq0.innerHTML==="X"&&sq4.innerHTML==="X"&&sq8.innerHTML==="X"
      ){
      startButt.innerHTML="player 1 wins..keep playing";
      player1Score++;
     player1.innerHTML="Player 1: "+player1Score;
      gameReset();
    }else if(sq0.innerHTML==="O"&&sq1.innerHTML==="O"&&sq2.innerHTML==="O"||
    sq3.innerHTML==="O"&&sq4.innerHTML==="O"&&sq5.innerHTML==="O"||
    sq6.innerHTML==="O"&&sq7.innerHTML==="O"&&sq8.innerHTML==="O"||
    sq0.innerHTML==="O"&&sq3.innerHTML==="O"&&sq6.innerHTML==="O"||
    sq1.innerHTML==="O"&&sq4.innerHTML==="O"&&sq7.innerHTML==="O"||
    sq2.innerHTML==="O"&&sq5.innerHTML==="O"&&sq8.innerHTML==="O"||
    sq2.innerHTML==="O"&&sq4.innerHTML==="O"&&sq6.innerHTML==="O"||
    sq0.innerHTML==="O"&&sq4.innerHTML==="O"&&sq8.innerHTML==="O"
     ){
      startButt.innerHTML="player 2 wins..keep playing";
      player2Score++;
      player2.innerHTML="Player 2: "+player2Score;
      gameReset();
     
    }else{}
  });
}
