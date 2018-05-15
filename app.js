"use strict";
function rollDice(value){
	let dice = parseInt(Math.random() * value + 1);
	console.log(dice);
	return dice;
}

function defenderRoll(){
	player1Defend = false;
	player2Defend = false;
	player3Defend = false;
	player4Defend = false;
	let defenderRoll = rollDice(4);
	if (defenderRoll === 1){
		console.log("Player 1 is defending");
		return player1Defend = true;
	}
	else if (defenderRoll === 2){
		console.log("Player 2 is defending");
		return player2Defend = true;
	}
	else if (defenderRoll === 3){
		console.log("Player 3 is defending");
		return player3Defend = true;
	}
	else{
		console.log("Player 4 is defending");
		return player4Defend = true;
	}
}

function trueFalse(){
	if(player1Attack === true){
		player1Attack = false;
		player2Attack = true;
		console.log("Player 2's turn.. Player 2 will roll to choose a defender");
		return;
	}
	else if(player2Attack === true){
		player2Attack = false;
		player3Attack = true;
		console.log("Player 3's turn.. Player 3 will roll to choose a defender");
		return;
	}
	else if(player3Attack === true){
		player3Attack = false;
		player4Attack = true;
		console.log("Player 4's turn.. Player 4 will roll to choose a defender");
		return;
	}
	else{
		player4Attack = false;
		player1Attack = true;
		console.log("Player 1's turn.. Player 1 will roll to choose a defender");
		return;
	}
}

function showLoser(player1, player2, player3, player4){
	if(player1<=0){
	console.log("Player 1 lost!");
	}
	if(player2<=0){
	console.log("Player 2 lost!");
	}
	if(player3<=0){
	console.log("Player 3 lost!");
	}
	if(player4<=0){
	console.log("Player 4 lost!");
	}
}

function printResults(p1, p2, p3, p4){
	console.log("Troops left: ");
	console.log("Player 1: " + p1);
	console.log("Player 2: " + p2);
	console.log("Player 3: " + p3);
	console.log("Player 4: " + p4);
}

function getPlayerNames(p1, p2, p3, p4){
	p1 = prompt("What is Player 1's name?", "");
	p2 = prompt("What is Player 2's name?", "");
	p3 = prompt("What is Player 3's name?", "");
	p4 = prompt("What is Player 4's name?", "");
	return;
}

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
let attacker = 0;
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
		attacker = player1;
		player1Attack = true;
	}
	else if(startingRoll === 2){
		console.log("Player 2 will go first.");	
		attacker = player2;	
		player2Attack = true;

	}
	else if(startingRoll === 3){
		console.log("Player 3 will go first.");	
		attacker = player3;
		player3Attack = true;
	}
	else{
		console.log("Player 4 will go first.");	
		attacker = player4;
		player4Attack = true;
	}
	console.log("Time to choose a defender..");
	

do{
	defenderRoll();
	if(player1Attack && player1Defend){
		console.log("Player 1 is attacking him/herself! Roll a 1 or 5 or lose 5 troops.");
		attackingSelfRoll = rollDice(5);
		console.log("Player 1 rolled a " + attackingSelfRoll + ".");
		if((attackingSelfRoll !== 1)&&(attackingSelfRoll !== 5)){
			player1 -= 5;
			console.log("Player 1 now has " + player1 + " troops.")
		}
		else{
			console.log("Player 1 rolled a " + attackingSelfRoll + " and did not lose any troops.");
		}
		attackingSelfRoll = 0;
	}
	else if(player2Attack && player1Defend){
		console.log("Player 1 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 2 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 2 attacked Player 1 and won!  Player 1 rolls to see how many troops are left");
			tempRollTroopsLost = rollDice(8);
			player1 -= tempRollTroopsLost;
			console.log("Player 1 lost " + tempRollTroopsLost + " troop(s) and now has " + player1 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 1 defended against player 2, player 2 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 1 successfully defended causing player 2 to lose " + tempRollTroopsLost + " troop(s).");
			player2 -= tempRollTroopsLost;
			console.log("Player 2 now has " + player2 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player3Attack && player1Defend){
		console.log("Player 1 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 3 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 3 attacked Player 1 and won!  Player 1 rolls to see how many troops are defeated");	
			tempRollTroopsLost = rollDice(8);
			player1 -= tempRollTroopsLost;
			console.log("Player 1 lost " + tempRollTroopsLost + " troop(s) and now has " + player1 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 1 defended against player 3, player 3 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 1 successfully defended causing player 3 to lose " + tempRollTroopsLost + " troop(s).");
			player3 -= tempRollTroopsLost;
			console.log("Player 3 now has " + player3 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player4Attack && player1Defend){
		console.log("Player 1 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 4 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 2 attacked Player 1 and won!  Player 1 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player1 -= tempRollTroopsLost;
			console.log("Player 1 lost " + tempRollTroopsLost + " troop(s) and now has " + player1 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 1 defended against player 4, player 4 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 1 successfully defended causing player 2 to lose " + tempRollTroopsLost + " troop(s).");
			player4 -= tempRollTroopsLost;
			console.log("Player 2 now has " + player4 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player1Attack && player2Defend){
		console.log("Player 2 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 1 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 1 attacked Player 2 and won!  Player 2 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player2 -= tempRollTroopsLost;
			console.log("Player 2 lost " + tempRollTroopsLost + " troop(s) and now has " + player2 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 2 defended against player 1, player 1 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 2 successfully defended causing player 1 to lose " + tempRollTroopsLost + " troop(s).");
			player1 -= tempRollTroopsLost;
			console.log("Player 1 now has " + player1 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player2Attack && player2Defend){
		console.log("Player 2 is attacking him/herself! Roll a 1 or 5 or lose 5 troops.");
		attackingSelfRoll = rollDice(5);
		console.log("Player 2 rolled a " + attackingSelfRoll + ".");
		if((attackingSelfRoll !== 1)&&(attackingSelfRoll !== 5))
		{
			player2 -= 5;
			console.log("Player 2 now has " + player2 + " troops.")
		}
		else{
			console.log("Player 2 rolled a " + attackingSelfRoll + " and did not lose any troops.");
		}
		attackingSelfRoll = 0;
	}
	else if(player3Attack && player2Defend){
		console.log("Player 2 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 3 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 3 attacked Player 2 and won!  Player 2 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player2 -= tempRollTroopsLost;
			console.log("Player 2 lost " + tempRollTroopsLost + " troop(s) and now has " + player2 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 2 defended against player 3, player 3 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 2 successfully defended causing player 3 to lose " + tempRollTroopsLost + " troop(s).");
			player3 -= tempRollTroopsLost;
			console.log("Player 3 now has " + player3 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player4Attack && player2Defend){
		console.log("Player 2 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 4 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 4 attacked Player 2 and won!  Player 2 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player2 -= tempRollTroopsLost;
			console.log("Player 2 lost " + tempRollTroopsLost + " troop(s) and now has " + player2 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 2 defended against player 4, player 4 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 2 successfully defended causing player 4 to lose " + tempRollTroopsLost + " troop(s).");
			player4 -= tempRollTroopsLost;
			console.log("Player 4 now has " + player4 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;
	}
	else if(player1Attack && player3Defend){
		console.log("Player 3 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 1 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 1 attacked Player 3 and won!  Player 3 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player3 -= tempRollTroopsLost;
			console.log("Player 3 lost " + tempRollTroopsLost + " troop(s) and now has " + player3 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 3 defended against player 1, player 1 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 3 successfully defended causing player 1 to lose " + tempRollTroopsLost + " troop(s).");
			player1 -= tempRollTroopsLost;
			console.log("Player 1 now has " + player1 + " troops.");
			tempRollTroopsLost = 0;
		}	
		attackingSelfRoll = 0;
	}
	else if(player2Attack && player3Defend){
		console.log("Player 3 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 2 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 2 attacked Player 3 and won!  Player 3 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player3 -= tempRollTroopsLost;
			console.log("Player 3 lost " + tempRollTroopsLost + " troop(s) and now has " + player3 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 3 defended against player 2, player 2 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 3 successfully defended causing player 2 to lose " + tempRollTroopsLost + " troop(s).");
			player2 -= tempRollTroopsLost;
			console.log("Player 2 now has " + player2 + " troops.");
			tempRollTroopsLost = 0;
		}		
		attackingSelfRoll = 0;
	}
	else if(player3Attack && player3Defend){
		console.log("Player 3 is attacking him/herself! Roll a 1 or 5 or lose 5 troops.");
		attackingSelfRoll = rollDice(5);
		console.log("Player 3 rolled a " + attackingSelfRoll + ".");
		if((attackingSelfRoll !== 1)&&(attackingSelfRoll !== 5)){
			player3 -= 5;
			console.log("Player 3 now has " + player3 + " troops.")
		}
		else{
			console.log("Player 3 rolled a " + attackingSelfRoll + " and did not lose any troops.");
		}
		attackingSelfRoll = 0;
	}
	else if(player4Attack && player3Defend){
		console.log("Player 3 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 4 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 4 attacked Player 3 and won!  Player 3 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player3 -= tempRollTroopsLost;
			console.log("Player 3 lost " + tempRollTroopsLost + " troop(s) and now has " + player3 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 3 defended against player 4, player 4 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 3 successfully defended causing player 4 to lose " + tempRollTroopsLost + " troop(s).");
			player4 -= tempRollTroopsLost;
			console.log("Player 4 now has " + player4 + " troops.");
			tempRollTroopsLost = 0;
		}	
		attackingSelfRoll = 0;
	}
	else if(player1Attack && player4Defend){
		tempRollDefender = rollDice(12);
		console.log("Player 1 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 1 attacked Player 4 and won!  Player 4 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player4 -= tempRollTroopsLost;
			console.log("Player 4 lost " + tempRollTroopsLost + " troop(s) and now has " + player4 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 4 defended against player 1, player 1 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 4 successfully defended causing player 1 to lose " + tempRollTroopsLost + " troop(s).");
			player1 -= tempRollTroopsLost;
			console.log("Player 1 now has " + player1 + " troops.");
			tempRollTroopsLost = 0;
		}	
		attackingSelfRoll = 0;	
	}
	else if(player2Attack && player4Defend){
		console.log("Player 4 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 2 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 2 attacked Player 4 and won!  Player 4 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player4 -= tempRollTroopsLost;
			console.log("Player 4 lost " + tempRollTroopsLost + " troop(s) and now has " + player4 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 4 defended against player 2, player 2 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 2 successfully defended causing player 2 to lose " + tempRollTroopsLost + " troop(s).");
			player2 -= tempRollTroopsLost;
			console.log("Player 2 now has " + player2 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;	
	}
	else if(player3Attack && player4Defend){
		console.log("Player 4 Rolls a ...");
		tempRollDefender = rollDice(12);
		console.log("Player 3 Rolls a ...");
		tempRollAttacker = rollDice(10);

		if(tempRollAttacker > tempRollDefender){
			console.log("Player 3 attacked Player 4 and won!  Player 4 rolls to see how many troops are defeated");
			tempRollTroopsLost = rollDice(8);
			player4 -= tempRollTroopsLost;
			console.log("Player 4 lost " + tempRollTroopsLost + " troop(s) and now has " + player4 + " troop(s).");
			tempRollTroopsLost = 0;
		}
		else{
			console.log("Player 4 defended against player 3, player 3 rolls to see how many troops will be lost.");
			tempRollTroopsLost = rollDice(6)
			console.log("Player 4 successfully defended causing player 3 to lose " + tempRollTroopsLost + " troop(s).");
			player3 -= tempRollTroopsLost;
			console.log("Player 3 now has " + player3 + " troops.");
			tempRollTroopsLost = 0;
		}
		attackingSelfRoll = 0;	
	}
	else{
		console.log("Player 4 is attacking him/herself! Roll a 1 or 5 to avoid losing any troops.");
		attackingSelfRoll = rollDice(5);
		console.log("Player 4 rolled a " + attackingSelfRoll + ".");
		if((attackingSelfRoll !== 1)&&(attackingSelfRoll !== 5)){
			player4 -= 5;
			console.log("Player 4 now has " + player4 + " troops.")
		}
		else{
			console.log("Player 4 rolled a " + attackingSelfRoll + " and did not lose any troops.");
		}
		attackingSelfRoll = 0;
	}
	if((player1>0)&&(player2>0)&&(player3>0)&&(player4>0)){
	trueFalse();
	}
}while((player1 > 0)&&(player2 > 0)&&(player3 > 0)&&(player4 > 0));

printResults(player1, player2, player3, player4);
showLoser(player1, player2, player3, player4);