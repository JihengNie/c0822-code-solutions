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
var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
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
console.log(newDeck);

function shuffleDeck(deck) {
  var shuffledDeck = _.shuffle(deck);
  return shuffledDeck;
}

var shuffledDeck = shuffleDeck(newDeck);
console.log(shuffledDeck);

function assignValuesToCards(CardArray) {
  var scoredArray = [];
  var temp = [];
  for (var i = 0; i < CardArray.length; i++) {
    temp = _.split(CardArray[i], ' ', 2);
    if (temp[i] === 'Ace') {
      scoredArray.push(11);
      temp = [];
    } else if (temp[i] === 'Jack' || temp[i] === 'Queen' || temp[i] === 'King') {
      scoredArray.push(10);
      temp = [];
    } else {
      scoredArray.push(_.toNumber(temp[i]));
      temp = [];
    }
  }
  return scoredArray;
}
*/
