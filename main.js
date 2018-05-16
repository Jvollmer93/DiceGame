///////////////////////MAIN///////////////////////MAIN///////////////////////MAIN///////////////////////
let playerPrompt = prompt("How many troops would you like to start with?", 0);
playersPrompt(playerPrompt);
let player1 = parseInt(playerPrompt);
let player2 = parseInt(playerPrompt);
let player3 = parseInt(playerPrompt);
let player4 = parseInt(playerPrompt);
let names = getPlayerNames()
let player1Name = names[0];
let player2Name = names[1];
let player3Name = names[2];
let player4Name = names[3];
let player1Attack = false;
let player2Attack = false;
let player3Attack = false;
let player4Attack = false;
let player1Defend = false;
let player2Defend = false;
let player3Defend = false;
let player4Defend = false;
let attackingSelfRoll = 0;
let tempRollAttacker = 0;
let tempRollDefender = 0;
let tempRollTroopsLost = 0;

printRules();
start(player1Name, player2Name, player3Name, player4Name);

do{
	defenderRoll(player1Name, player2Name, player3Name, player4Name);
	if(player1Attack && player1Defend){
		attackSelf(player1Name, player1);
		attackingSelfRoll = 0;
	}
	else if(player2Attack && player1Defend){
		ifElse(player2Name, player1Name, player2, player1);
		tempRollTroopsLost = 0;
	}
	else if(player3Attack && player1Defend){
		ifElse(player3Name, player1Name, player3, player1);
		tempRollTroopsLost = 0;
	}
	else if(player4Attack && player1Defend){
		ifElse(player4Name, player1Name, player4, player1)
		tempRollTroopsLost = 0;
	}
	else if(player1Attack && player2Defend){
		ifElse(player1Name, player2Name, player1, player2);
		tempRollTroopsLost = 0;
	}
	else if(player2Attack && player2Defend){
		attackSelf(player2Name, player2);
		attackingSelfRoll = 0;
	}
	else if(player3Attack && player2Defend){
		ifElse(player3Name, player2Name, player3, player2);
		tempRollTroopsLost = 0;
	}
	else if(player4Attack && player2Defend){
		ifElse(player4Name, player2Name, player4, player2);
		tempRollTroopsLost = 0;
	}
	else if(player1Attack && player3Defend){
		ifElse(player1Name, player3Name, player1, player3);
		tempRollTroopsLost = 0;
	}
	else if(player2Attack && player3Defend){
		ifElse(player2Name, player3Name, player2, player3);
		tempRollTroopsLost = 0;
	}
	else if(player3Attack && player3Defend){
		attackSelf(player3Name, player3);
		attackingSelfRoll = 0;
	}
	else if(player4Attack && player3Defend){
		ifElse(player4Name, player3Name, player4, player3);
		tempRollTroopsLost = 0;
	}
	else if(player1Attack && player4Defend){
		ifElse(player1Name, player4Name, player1, player4);
		tempRollTroopsLost = 0;	
	}
	else if(player2Attack && player4Defend){
		ifElse(player2Name, player4Name, player2, player4);
		tempRollTroopsLost = 0;	
	}
	else if(player3Attack && player4Defend){
		ifElse(player3Name, player4Name, player3, player4);
		tempRollTroopsLost = 0;	
	}
	else{
		attackSelf(player4Name, player4);
		attackingSelfRoll = 0;
	}
	if((player1>0)&&(player2>0)&&(player3>0)&&(player4>0)){
	trueFalse(player1Name, player2Name, player3Name, player4Name);
	}
}while((player1 > 0)&&(player2 > 0)&&(player3 > 0)&&(player4 > 0));

printResults(player1, player2, player3, player4, player1Name, player2Name, player3Name, player4Name);

if(player1 <= 0){
	showLoser(player1Name);
}
else if(player2 <= 0){
	showLoser(player2Name);
}
else if(player3 <= 0){
	showLoser(player3Name);
}
else{
	showLoser(player4Name);
}