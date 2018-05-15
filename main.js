////////////////////MAIN//////////////////////////////////////////////////////////
let playerPrompt = prompt("How many troops would you like to start with?", 0);
while(playerPrompt < 1){
	playerPrompt = prompt("Please enter a valid number of troops to start with, greater than 0" , 0);
}
let player1 = parseInt(playerPrompt);
let player2 = parseInt(playerPrompt);
let player3 = parseInt(playerPrompt);
let player4 = parseInt(playerPrompt);
let player1Name, player2Name, player3Name, player4Name;
let player1Attack = false;
let player2Attack = false;
let player3Attack = false;
let player4Attack = false;
let player1Defend = false;
let player2Defend = false;
let player3Defend = false;
let player4Defend = false;
let diceValue = 0;
let playerDefendingDice = 0;
let playerAttackingDice = 0;
let attackingSelfRoll = 0;
let tempRollAttacker = 0;
let tempRollDefender = 0;
let tempRollTroopsLost = 0;

getPlayerNames(player1Name, player2Name, player3Name, player4Name);

console.log("Rules of the game: There are 4 player, when 1 player attacks another they will roll a 10 sided die where the defender rolls a 12 sided die.  If the defenders roll is greater than the attackers, the attacker will roll a 6 sided die which is equivalent to the amount of troops that player will lose.  If the defender rolls lower than the attacker, they will roll an 8 sided die to see how many troops are lost. Rolls that come up as a tie between the attacker and defender will count as a win for the defender.  First player to 0 troops, loses.");
console.log("Let's see who will start the game...");
let startingRoll = rollDice(4);
	if(startingRoll === 1){
		console.log("Player 1 will go first.");	
		player1Attack = true;
	}
	else if(startingRoll === 2){
		console.log("Player 2 will go first.");	
		player2Attack = true;

	}
	else if(startingRoll === 3){
		console.log("Player 3 will go first.");	
		player3Attack = true;
	}
	else{
		console.log("Player 4 will go first.");	
		player4Attack = true;
	}
	console.log("Time to choose a defender..");
	

do{
	defenderRoll();
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
	trueFalse();
	}
}while((player1 > 0)&&(player2 > 0)&&(player3 > 0)&&(player4 > 0));

printResults(player1, player2, player3, player4);
showLoser(player1, player2, player3, player4);