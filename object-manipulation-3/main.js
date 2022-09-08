console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
Need an array for
  player name
  player hand
  card rank
  card suit
  card values

need a function for assigning 2 cards to each player
*/
/*
var playerName = ['Player1', 'Player2', 'Player3', 'Player4'];
var PlayerHand = [];
var cardRank = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function creatingNewDeck(cardRank, cardSuit) {
  var result = [];
  for (var i = 0; i < cardRank.length; i++) {
    for (var j = 0; j < cardSuit.length; j++) {
      result.push(cardSuit[j] + ' ' + cardRank[i]);
    }
  }
  return result;
}

var newDeck = creatingNewDeck(cardRank, cardSuit);

function shuffleDeck(deck) {
  var shuffledDeck = [];
  var totalCards = 52;
  var randomIndex = Math.floor(Math.random() * totalCards);
  for (var k = 0; k < deck.length; k++) {
    if (!_.includes(shuffledDeck, deck[randomIndex])) {
      shuffledDeck.push(deck[randomIndex]);
      totalCards--;
    }
  }
  return shuffledDeck;
}

console.log(shuffleDeck(newDeck));
*/
