var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

function getDeck()
{
  var deck = new Array();

  for (var i = 0; i < suits.length; i++)
  {
    for (var x = 0; x < values.length; x++)
    {
      var card = {Value: values[x], Suit: suits[i]};
      deck.push(card);
  }
  }
  return deck;
}

function shuffLe() //1000 time 2 card shuffle
{
  for (var i = 0; i < 1000; i++)
  {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;

  }
}

function renderDeck()
{
  for (var i = 0; i < deck.length; i++)
  {
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");

    card.classname = "card";
    value.classname = "value";
    suit.classname = "suit" + deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("deck").appendChild(card);
  }
}
