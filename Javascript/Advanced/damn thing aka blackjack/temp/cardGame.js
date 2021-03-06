var deck = new Array();
var players = new Array();
var currentPlayer = 0;

function createDeck()
{
  var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  var valuees = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  for (var i = 0; i < values.length; i++)
  {
    for (var x = 0; x < suits.length; x++)
    {
      var weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K"){
        weight = 10;
      }
      if (values[i] = "A"){
        weight = 11;
      }
      var card = {Value: values[i], Suit: suits[x], Weight: weight};
      deck.push(card);
    }
  }
}

function createPlayers(num)
{
  for (var i = 1; i <= num; i++)
  {
    var hand = new Array();
    var player = {Name: "Player " + i, ID: i, Points: 0, Hand: hand};
    players.push(player);
  }
}
/*
function createPlayersUI()
{
document.getElementById("players").innerHTML = "";
for (var i = 0; i < players.length; i++)
{
  var div_player = document.createElement("div");
  var div_playerid = document.createElement("div");
  var div_hand = document.createElement("div");
  var div_points = document.createElement("div");

  div_points.className = "points";
  div_points.id = "points_" + i;
  div_player.id = "player_" + i;
  div_player.className = "player";
  div_hand.id = "hand_" + i;

  div_playerid.innerHTML = players[i].ID;
  div_player.appendChild(div_playerid);
  div_player.appendChild(div_hand);
  div_player.appendChild(div_points);
  document.getElementById("players").appendChild(div_player);
  }
}*/

function shuffLe() //2000 time 2 card shuffle
{
for (var i = 0; i < 2000; i++)
{
  var location1 = Math.floor((Math.random() * deck.length));
  var location2 = Math.floor((Math.random() * deck.length));
  var tmp = deck[location1];

  deck[location1] = deck[location2];
  deck[location2] = tmp;

  }
}

function start() //deal 2 cards
{
createDeck();
shuffLe();
//createPlayers(2);
//createPlayersUI();
//dealHands();
//document.getElementById("player_" + currentPlayer).classList.add("active");
}
/*
function dealHands()
{
  for (var i = 0; i < 2; i++)
  {
    for (var x = 0; x < players.length; x++)
    {
      var card = deck.pop();
      players[x].Hand.push(card);
      renderCard(card, x);
      updatePoints();
    }
  }
  updateDeck();
}

function renderCard(card, player)
{
  var hand = document.getElementById("hand_" + player);
  hand.appendChild(getCardUI(card));
}

function getCardUI(card)
{
  var el = document.createElement("div");
  el.className = "card";
  el.innerHTML = card.Suit + " " + card.Value;
  return el;
}

function getPoints(player) //current value in hand
{
  var points = 0;
  for (var i = 0; i < players[player].Hand.length; i++)
  {
    points += players[player].Hand[i].Weight;
  }
  players[player].Points = points;
  return points;
}

function updatePoints()
{
  for (var i = 0; i < players.length; i++)
  {
      getPoints(i);
      document.getElementById("points_" + i).innerHTML = players[i].Points;
  }
}

function hitMe() //hit and check if over 21
{
  var card = deck.pop();
  players[currentPlayer].Hand.push(card);
  renderCard(card, currentPlayer);
  updatePoints();
  updateDeck();
  check();
}

function stay() //move to next player
{
  if (currentPlayer != players.length-1)
  {
    document.getElementById("player_" + currentPlayer).classList.remove("active");
    currentPlayer += 1;
    document.getElementById("player_" + currentPlayer).classList.add("active");
  } else {
    end();
  }
}

function end()
{
  var winner = -1;
  var score = 0;

  for (var i = 0; i < players.length; i++)
    {
      if (players[i].Points > score && players[i].Points < 22)
      {
  winner = i;
    }
  score = players[i].Points;
  }
  document.getElementById("status").innerHTML = "Winner: Player " + players[winner].ID;
}

function check()
{
  if (players[currentPlayer].Points > 21)
  {
    document.getElementById("status").innerHTML = "Player: " + players[currentPlayer].ID + " LOST!";
  }
}

function updateDeck()
{
  document.getElementById("deckcount").innerHTML = deck.length;
}

/*
window.addEventListener("load", function()
{
  createDeck();
  shuffLe();
  createPlayers(1);
});*/
