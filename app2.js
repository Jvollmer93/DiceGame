"use strict";
function rollDice(value){
	let dice = parseInt(Math.random() * value + 1);
	console.log(dice);
	return dice;
}

function defenderRoll(n1, n2, n3, n4){
	player1Defend = false;
	player2Defend = false;
	player3Defend = false;
	player4Defend = false;
	let defenderRoll = rollDice(4);
	if (defenderRoll === 1){
		console.log(n1 + " is defending");
		return player1Defend = true;
	}
	else if (defenderRoll === 2){
		console.log(n2 + " is defending");
		return player2Defend = true;
	}
	else if (defenderRoll === 3){
		console.log(n3 + " is defending");
		return player3Defend = true;
	}
	else{
		console.log(n4 + " is defending");
		return player4Defend = true;
	}
}

function trueFalse(n1, n2, n3, n4){
	if(player1Attack === true){
		player1Attack = false;
		player2Attack = true;
		console.log(n2 + "'s turn.. " + n2 + " will roll to choose a defender");
		return;
	}
	else if(player2Attack === true){
		player2Attack = false;
		player3Attack = true;
		console.log(n3 + "'s turn.. " + n3 + " will roll to choose a defender");
		return;
	}
	else if(player3Attack === true){
		player3Attack = false;
		player4Attack = true;
		console.log(n4 + "'s turn.. " + n4 + " will roll to choose a defender");
		return;
	}
	else{
		player4Attack = false;
		player1Attack = true;
		console.log(n1 + "'s turn.. " + n1 + " will roll to choose a defender");
		return;
	}
}

function showLoser(name){
	console.log(name + " lost!!");
}

function printResults(p1, p2, p3, p4, n1, n2, n3, n4){
	console.log("Troops left: ");
	console.log(n1 + " : " + p1);
	console.log(n2 + " : " + p2);
	console.log(n3 + " : " + p3);
	console.log(n4 + " : " + p4);
}

function getPlayerNames(){
	let p1 = prompt("What is Player 1's name?", '');
	let p2 = prompt("What is Player 2's name?", '');
	let p3 = prompt("What is Player 3's name?", '');
	let p4 = prompt("What is Player 4's name?", '');
	return [p1, p2, p3, p4];
}

function ifElse(nameA, nameD, p1, p2){
	tempRollAttacker = 0;
	tempRollDefender = 0;
	console.log(nameA + " is attacking " + nameD + "!");
	console.log(nameD + " rolls a...");
	tempRollDefender = rollDice(12);
	console.log(nameA + " rolls a...");
	tempRollAttacker = rollDice(10);
	if(tempRollAttacker > tempRollDefender){
		p2 = attackerWins(nameA, nameD, p2);
		return [p1, p2];
	}
	else{
		p1 = defenderWins(nameA, nameD, p1);
		return [p1, p2];
	}
}

function attackSelf(playerName, playerTroops){
	console.log(playerName + " is attacking him/herself! Roll a 1 or 5 to avoid losing 5 troops");
	attackingSelfRoll = rollDice(5);
	if((attackingSelfRoll !== 5)||(attackingSelfRoll !== 1)){
		attackingSelfRoll = 0;
		playerTroops -= 5;
		console.log(playerName + " did not roll a 1 or 5, and lost 5 troops. " + playerName + " now has " + playerTroops + " troops");
		return playerTroops;
	}
	console.log(playerName + " succesfully rolled a 1 or 5 and did not lose any troops");
	attackingSelfRoll = 0;
	return playerTroops;
}

function attackerWins(nameA, nameD, playerTroops){
	console.log(nameA + " successfully attacked " + nameD + ", " + nameD + " rolls to see how many troops are lost");
	let tempRollTroopsLostInstance = rollDice(8);
	playerTroops = loseTroops(tempRollTroopsLostInstance, playerTroops);
	console.log(nameD + " lost " + tempRollTroopsLostInstance + " and now has " + playerTroops + " troops.");
	tempRollTroopsLostInstance = 0;
	return playerTroops;
}

function defenderWins(nameA, nameD, playerTroops){
	console.log(nameA + " attacked " + nameD + " and lost, " + nameA + " rolls to see how many troops are lost");
	let tempRollTroopsLostInstance = rollDice(8);
	playerTroops = loseTroops(tempRollTroopsLostInstance, playerTroops);
	console.log(nameA + " lost " + tempRollTroopsLostInstance + " and now has " + playerTroops + " troops.");
	tempRollTroopsLostInstance = 0;
	return playerTroops;
}

function loseTroops(troopsLost, player){
	player = player - troopsLost;
	return player;
}

function start(n1, n2, n3, n4){
	let startingRoll = rollDice(4);
	if(startingRoll === 1){
	console.log(n1 + " will go first.");	
	player1Attack = true;
	}
	else if(startingRoll === 2){
		console.log(n2 + " will go first.");	;	
		player2Attack = true;

	}
	else if(startingRoll === 3){
		console.log(n3 + " will go first.");	
		player3Attack = true;
	}
	else{
		console.log(n4 + " will go first.");	
		player4Attack = true;
	}
	console.log("Time to choose a defender..");
	return;
}
function printRules(n1, n2, n3 , n4){
	console.log("Rules of the game: There are 4 player, when 1 player attacks another they will roll a 10 sided die where the defender rolls a 12 sided die.  If the defenders roll is greater than the attackers, the attacker will roll a 6 sided die which is equivalent to the amount of troops that player will lose.  If the defender rolls lower than the attacker, they will roll an 8 sided die to see how many troops are lost. Rolls that come up as a tie between the attacker and defender will count as a win for the defender.  First player to 0 troops, loses.");
	console.log("Player 1: " + n1);
	console.log("Player 2: " + n2);
	console.log("Player 3: " + n3);
	console.log("Player 4: " + n4);
	console.log("Let's roll to see who will start the game...");
}

function playersPrompt(troopPrompt){
	while(troopPrompt < 1){
	troopPrompt = prompt("Please enter a valid number of troops to start with, greater than 0" , 0);
}
return troopPrompt;
}

///////////////////////MAIN///////////////////////MAIN///////////////////////MAIN///////////////////////
let playerPrompt = prompt("How many troops would you like to start with?", 0);
playersPrompt(playerPrompt);
let player1 = parseInt(playerPrompt);
let player2 = parseInt(playerPrompt);
let player3 = parseInt(playerPrompt);
let player4 = parseInt(playerPrompt);
let names = getPlayerNames();
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

printRules(player1Name, player2Name, player3Name, player4Name);
start(player1Name, player2Name, player3Name, player4Name);

do{
	defenderRoll(player1Name, player2Name, player3Name, player4Name);
	if((player1<=0)||(player2<=0)||(player3<=0)||(player4<=0)){
		break;
	}
	if(player1Attack && player1Defend){
		player1 = attackSelf(player1Name, player1);
		attackingSelfRoll = 0;
	}
	else if(player2Attack && player1Defend){
		[player2, player1] = ifElse(player2Name, player1Name, player2, player1);
	}
	else if(player3Attack && player1Defend){
		[player3, player1] = ifElse(player3Name, player1Name, player3, player1);
	}
	else if(player4Attack && player1Defend){
		[player4, player1] = ifElse(player4Name, player1Name, player4, player1);
	}
	else if(player1Attack && player2Defend){
		[player1, player2] = ifElse(player1Name, player2Name, player1, player2);
	}
	else if(player2Attack && player2Defend){
		player2 = attackSelf(player2Name, player2);
		attackingSelfRoll = 0;
	}
	else if(player3Attack && player2Defend){
		[player3, player2] = ifElse(player3Name, player2Name, player3, player2);
	}
	else if(player4Attack && player2Defend){
		[player4, player2] = ifElse(player4Name, player2Name, player4, player2);
	}
	else if(player1Attack && player3Defend){
		[player1, player3] = ifElse(player1Name, player3Name, player1, player3);
	}
	else if(player2Attack && player3Defend){
		[player2, player3] = ifElse(player2Name, player3Name, player2, player3);
	}
	else if(player3Attack && player3Defend){
		player3 = attackSelf(player3Name, player3);
		attackingSelfRoll = 0;
	}
	else if(player4Attack && player3Defend){
		[player4, player3] = ifElse(player4Name, player3Name, player4, player3);
	}
	else if(player1Attack && player4Defend){
		[player1, player4] = ifElse(player1Name, player4Name, player1, player4);	
	}
	else if(player2Attack && player4Defend){
		[player2, player4] = ifElse(player2Name, player4Name, player2, player4);	
	}
	else if(player3Attack && player4Defend){
		[player3, player4] = ifElse(player3Name, player4Name, player3, player4);
	}
	else{
		player4 = attackSelf(player4Name, player4);
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