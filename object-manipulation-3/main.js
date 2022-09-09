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

var testHand = [newDeck[0], newDeck[13], newDeck[23], newDeck[33], newDeck[43]];
console.log(testHand);

function assignValuesToCards(CardArray) {
  var scoredArray = [];
  var temp = [];
  for (var i = 0; i < CardArray.length; i++) {
    temp = _.split(CardArray[i], ' ', 2);
    if (temp[1] === 'Ace') {
      scoredArray.push(11);
      temp = [];
    } else if (temp[1] === 'Jack' || temp[1] === 'Queen' || temp[1] === 'King') {
      scoredArray.push(10);
      temp = [];
    } else {
      scoredArray.push(_.toNumber(temp[1]));
      temp = [];
    }
  }
  return scoredArray;
}

console.log(assignValuesToCards(newDeck));

function dealingCards(shuffledDeck, handSize, playerName) {
  var result = [];
  var temp = [];
  var shuffledDeckTemp = shuffledDeck;
  for (var j = 0; j < playerName.length; j++) {
    for (var i = 0; i < handSize; i++) {
      temp.push(shuffledDeckTemp[0]);
      shuffledDeckTemp = _.drop(shuffledDeckTemp);
    }
    result.push(temp);
    temp = [];
  }
  return result;
}

PlayerHand = dealingCards(shuffledDeck, 2, playerName);

function scoringHands(PlayerHand) {
  var result = [];
  for (var i = 0; i < PlayerHand.length; i++) {
    var cardsPerPlayer = PlayerHand[i];
    cardsPerPlayer = assignValuesToCards(cardsPerPlayer);
    result.push(_.sum(cardsPerPlayer));
    cardsPerPlayer = [];
  }
  return result;
}

console.log(scoringHands(PlayerHand));
*/
