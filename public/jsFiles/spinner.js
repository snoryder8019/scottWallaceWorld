let token = document.getElementById('tokenIntro');
let output = document.getElementById('numberOutput');
let spinScore = document.getElementById('scoreOutput');
let scoreLast= document.getElementById('scoreLast');
let history = document.getElementById('history');
let historyBar = document.getElementById('historyBar');

let scoreTally = [""];
let scoreOutput =0

let zzz;
let zzy;
var lastSpin =0;




function spinner(){
	let randoNumm =Math.random()/360*1000000+'deg';
		if(token.style.transform!=='rotate(0deg)'){
		token.style.transitionDuration="1.2s";
		let zzz= token.style.transform='rotate(0deg)';
		output.innerHTML="Resetting!!~~one moment";
for (x=0;x<scoreTally.length;x++){
	var listItem=document.createElement('li');
		listItem.appendChild(createTextNode(scoreTally[x]));
		history.appendChild(listItem);
	}
}

		else{
			token.style.transitionDuration="6s";
			let zzy=token.style.transform='rotate('+randoNumm+')';
			output.innerHTML='Spinning!! Good Luck!';
			let xx=zzy.slice(7,-4);
			console.log(Math.round(xx));
		switch(true){

	case (xx<22.5):
	lastSpin =1;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '1';
	break;

	case xx<67.5:
	lastSpin =8;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '8';
	break;

	case xx<112.5:
	lastSpin =7;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '7';
		break;

	case xx<157.5:
	lastSpin =6;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '6';
	break;

	case xx<212.5:
	lastSpin =5;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '5';
		break;

	case xx<257.5:
	lastSpin =4;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '4';
		break;

	case xx<302.5:
	lastSpin =3;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '3';
	break;

	case xx<347.5:
	lastSpin =2;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML = '2';
	break;

	case xx<360:
	lastSpin =1;
	scoreTally.push(lastSpin);
	scoreLast.innerHTML='1';
	break;

	default:
	console.log(xx);
	break;
}



	history.style.display='block';


for(let i=0;i<length.scoreTally;i++){
	let historyBit= document.createElement('div');
	historyBit.setAttribute('class','historyBit');

	document.body.appendChild(historyBit);
		history.appendChild(historyBit);
	historyBit.innerHTML=scoreTally[i];


}




}

}
