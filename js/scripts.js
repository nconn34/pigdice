// Business logic for dice rolls


console.log("hello!");
console.log("pig dice rules!");
console.log(Math.ceil(Math.random()*6));

const roll1 = Math.ceil(Math.random()*6);
console.log("roll 1 :", roll1);

const roll2 = Math.ceil(Math.random()*6);
console.log("roll 2 :", roll2);

let player1 = roll1 + roll2
console.log("Player 1 score:", player1)

// function rollDice(){
//    return Math.ceil(Math.random()*6);
// }

// Player.prototype.endTurn = function () {
//     this.totalScore += this.currentScore;
//     this.currentScore = 0;
//   }

  function rollDice(){
    return Math.ceil(Math.random()*6);
 }

// function roll(){
//   const roll = rollDice();
//   let score = ""
//   const bust = "Bust!"
//   if (roll === 1){
//       score = bust;
//   } else if (roll > 1){
//       score = roll;
//   }
//   return score
// };




// Objects

function Player(name, turn, totalScore){
    this.name=name;
    this.turn=turn;
    this.totalScore=totalScore;
};

// Prototype section

// Player.prototype.endTurn = function () {
//     this.totalScore += this.currentScore;
//     this.currentScore = 0;
// }

// function addDice(number, player){
//    if (number===1){
//        player.totalScore=0;
//    } else {
//        player.addScore(number)
//    }
// }

Player.protoype.addScore = function(number){
    this.totalScore = this.totalScore + number
}

 function addRoll(roll, player) {
    // const roll = rollDice();
    if (roll === 1){
        player.totalScore = 0;
    } else {
        player.addScore(roll)
    }
    // return totalScore
  };

  function playerTurn(player1, player2){
     if (player1.turn === true){
         return player1
     } else {
         return player2
     }
  }

  function switchPlayer(player1, player2){
      if (player1.turn === true){
          player1.turn = false;
          player2.turn = true;
      } else {
          player1.turn = true;
          player2.turn = false;
      }
  }

  $(document).ready(function(){
      let dice = 0;
      let player1 = new Player("player1", true, 0);
      let player2 = new Player("player2", false, 0);
      let activePlayer = playerTurn(player1, player2);
      let roundCounter = 1;
      $("#current-player-name").html("The current player is: " + activePlayer.name);
      $("#dice").click(function(){
          dice = rollDice();
          $("#roll").html("You rolled a: " + dice);
          if(dice===1){
              switchPlayer(player1, player2);
              if(activePlayer.name === "player1"){
                  player1.totalScore = 0;
                  $("#player1-score").append("Round " + roundCounter + " score: " + activePlayer.totalScore + "<br>");
                  $("#roll").html("");
                  $("#current-score").html("");
              } else if(activePlayer.name === "player2"){
                  player2.totalScore = 0;
                  $("#player2-score").append("Round " + roundCounter + " score: " + activePlayer.totalScore + "<br>");
                  $("#roll").html("");
                  $("#current-score").html("");
                  roundCounter++;
              }                  
              currentPlayer = playerTurn(player1, player2);
              $("#current-player-name").html("The current player is: " + activePlayer.name);
              }
              addRoll(dice, activePlayer);
              $("#current-score").html("Your current score is: " + activePlayer.totalScore)
          })
          $("#finish").click(function(){
              if(activePlayer.name === "player1"){
                  $("#player1-score").append("Round " + roundCounter + " score: " +activePlayer.totalScore + "<br>");
                  $("#roll").html("");
                  $("#current-score").html("");
                  player1.totalScore = 0;
              } else if(activePlayer.name === "player2"){
                $("#player2-score").append("Round " + roundCounter + " score: " +activePlayer.totalScore + "<br>");
                $("#roll").html("");
                $("#current-score").html("");
                player2.totalScore = 0;
                roundCounter++;
              }
              switchPlayer(player1, player2);
              activePlayer = playerTurn(player1, player2);
              $("#current-player-name").html("The current player is: " + activePlayer.name);
          })
      })
  





