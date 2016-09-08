var humanPlayers;
var turn = 0;
var id;
var playersTurn;
var player1 = {
  "name" : "",
  "symbol" : "",
  "score" : 0
};

var player2 = {
  "name" : "",
  "symbol" : "",
  "score" : 0
};

var page1 = function () {
  $(".page").html("<p>Welcome!</p></br><button onclick='page2()' type='button'>Let's Play</button>");
};

var page2 = function() {
  $(".page").html("<p>How many humans?</p></br><button onclick='humans1()'>Just me</button></br></br><button onclick='humans2()'>There are two of us here.</button>");
};

var humans1 = function () {
  humanPlayers = 1;
  page3();
};

var humans2 = function () {
  humanPlayers = 2;
  page3();
};

var page3 = function () {
  if (humanPlayers === 1) {
    $(".page").html("<p>P1 name: <input id='p1name' type='text' name='P1'></p><br><br><button onclick='page4()'>Continue</button>");
    player2.name = "Faceless Fran";
  } else {
    $(".page").html("<p>P1 name: <input id='p1name' type='text' name='P1'></p><br><br><p>P2 name: <input id='p2name' type='text' name='P2'></p><button onclick='page4()'>Continue</button>");
  }
};

var page4 = function() {
  player1.name = $("#p1name").val();
  if (humanPlayers === 2) {
    player2.name = $("#p2name").val();
  }
  $(".page").html("<p>Choose your symbols:</p><br>" + player1.name + " is" + " <button onclick='page5x()'>X</button> <button onclick='page5o()'>O</button><br><br>" + player2.name + " is the other ones.");
};

var page5x = function () {
  player1.symbol = "x";
  player2.symbol = "o";
  playersTurn = "<p class='whosTurn'>" + player1.name + "'s (" + player1.symbol + "'s) turn</p>";
  page5();
};

var page5o = function () {
  player1.symbol = "o";
  player2.symbol = "x";
  playersTurn = "<p class='whosTurn'>" + player1.name + "'s (" + player1.symbol + "'s) turn</p>";
  page5();
};

var page5 = function () {
  $(".page").html("<table><tr><td id='1'></td><td id='2'></td><td id='3'></td></tr><tr><td id='4'></td><td id='5'></td><td id='6'></td></tr><tr><td id='7'></td><td id='8'></td><td id='9'></td></tr></table>");
  $(".page").append(playersTurn);
  $(".page").append("<p class='p1score'>" + player1.name + "'s (" + player1.symbol + "'s) score: " + player1.score + "</p>");
  $(".page").append("<p class='p2score'>" + player2.name + "'s (" + player2.symbol + "'s) score: " + player2.score + "</p>");
  playerTurn();
};

var checkTurn = function(id) {
  if ((turn % 2) === 0 ) {
    player1Turn(id);
    $(".whosTurn").text(player2.name + "'s (" + player2.symbol + "'s) turn");
  } else {
    player2Turn(id);
    $(".whosTurn").text(player1.name + "'s (" + player1.symbol + "'s) turn");
  }
};

var checkForWin = function(id) {
  if ($("#1").text() !== "" && $("#1").text() === $("#2").text() && $("#2").text() === $("#3").text()) {
    whoWon(id);
  } else if ($("#1").text() !== "" && $("#1").text() === $("#5").text() && $("#5").text() === $("#9").text()) {
    whoWon(id);
  } else if ($("#1").text() !== "" && $("#1").text() === $("#4").text() && $("#4").text() === $("#7").text()) {
    whoWon(id);
  } else if ($("#2").text() !== "" && $("#2").text() === $("#5").text() && $("#5").text() === $("#8").text()){
    whoWon(id);
  } else if ($("#3").text() !== "" && $("#3").text() === $("#6").text() && $("#6").text() === $("#9").text()) {
    whoWon(id);
  } else if ($("#3").text() !== "" && $("#3").text() === $("#5").text() && $("#5").text() === $("#7").text()) {
    whoWon(id);
  } else if ($("#4").text() !== "" && $("#4").text() === $("#5").text() && $("#5").text() === $("#6").text()) {
    whoWon(id);
  } else if ($("#7").text() !== "" && $("#7").text() === $("#8").text() && $("#8").text() === $("#9").text()) {
    whoWon(id);
  } else if ( $("#1").text() !== "" && $("#2").text() !== "" && $("#3").text() !== "" && $("#4").text() !== "" && $("#5").text() !== "" &&
   $("#6").text() !== "" && $("#7").text() !== "" && $("#8").text() !== "" && $("#9").text() !== "") {
    $(".page").html("<p>Draw</p><br><button onclick='page5()'>Play Again</button>");
    if (turn % 2 === 0) {
      playersTurn = "<p class='whosTurn'>" + player1.name + "'s (" + player1.symbol + "'s) turn</p>";
    } else {
      playersTurn = "<p class='whosTurn'>" + player2.name + "'s (" + player2.symbol + "'s) turn</p>";
    }
  }
};

var whoWon = function (id) {
  if ( player1.symbol == $(id).text() ){
    player1.score = player1.score + 1;
    $(".page").html("<p>" + player1.name + " wins!</p><br><button onclick='page5()'>Play Again</button>");
    playersTurn = "<p class='whosTurn'>" + player2.name + "'s (" + player2.symbol + "'s) turn</p>";
  } else {
    player2.score = player2.score + 1;
    $(".page").html("<p>" + player2.name + " wins!</p><br><button onclick='page5()'>Play Again</button>");
    playersTurn = "<p class='whosTurn'>" + player1.name + "'s (" + player1.symbol + "'s) turn</p>";
  }
};

var playerTurn = function() {
  $("#1").click(function(){
    id = "#1";
    checkTurn(id);
    checkForWin(id);
  });
  $("#2").click(function(){
    id = "#2";
    checkTurn(id);
    checkForWin(id);
  });
  $("#3").click(function(){
    id = "#3";
    checkTurn(id);
    checkForWin(id);
  });
  $("#4").click(function(){
    id = "#4";
    checkTurn(id);
    checkForWin(id);
  });
  $("#5").click(function(){
    id = "#5";
    checkTurn(id);
    checkForWin(id);
  });
  $("#6").click(function(){
    id = "#6";
    checkTurn(id);
    checkForWin(id);
  });
  $("#7").click(function(){
    id = "#7";
    checkTurn(id);
    checkForWin(id);
  });
  $("#8").click(function(){
    id = "#8";
    checkTurn(id);
    checkForWin(id);
  });
  $("#9").click(function(){
    id = "#9";
    checkTurn(id);
    checkForWin(id);
  });
};

var player1Turn = function(id) {
  if (!$(id).text()){
    $(id).text(player1.symbol);
    turn = turn + 1;
  }
};

var player2Turn = function(id) {
  if (!$(id).text()) {
    $(id).text(player2.symbol);
    turn = turn + 1;
  }
};

$(document).ready(function() {
  page1();
});
