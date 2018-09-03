var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var deck = [];
var playerHand = [];
var dealerHand = [];
var currentPlayer = 0;

function createDeck() { // creating deck
  for (var i = 0; i < values.length; i++)
  {
    for (var x = 0; x < suits.length; x++)
    {
      var weight = parseInt(values[i]);
      if (values[i] == "Jack" || values[i] == "Queen" || values[i] == "King")
        weight = 10;
      if (values[i] == "Ace")
        weight = 1;
      var card = {Value: values[i], Suit: suits[x], Weight: weight};
      deck.push(card);
    }
  }
}

function shuffle() { //2000 times 2 card suffle
  for (var i = 0; i < 2000; i++) {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
    }
}

function dealHands() {
  for (var i = 0; i < 2; i++); {
    for (var x = 0; x < playerHand.length; x++) {
      var card = deck.pop();
      dealerHand.push(card);
      playerHand.push(card);
    }
  }
}

function start() {
  createDeck();
  shuffle();
  dealHands();
}
