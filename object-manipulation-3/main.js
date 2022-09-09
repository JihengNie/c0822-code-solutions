console.log('Lodash is loaded:', typeof _ !== 'undefined');

function creatingNewDeck(cardRank, cardSuit) {
  var newDeck = [];
  for (var i = 0; i < cardRank.length; i++) {
    for (var j = 0; j < cardSuit.length; j++) {
      newDeck.push(cardSuit[j] + ' ' + cardRank[i]);
    }
  }
  return newDeck;
}

function shuffleDeck(deck) {
  var shuffledDeck = _.shuffle(deck);
  return shuffledDeck;
}

function dealingCards(shuffledDeck, handSize, playerName) {
  var cardsInPlayerHand = [];
  var temp = [];
  var shuffledDeckTemp = shuffledDeck;
  for (var j = 0; j < playerName.length; j++) {
    for (var i = 0; i < handSize; i++) {
      temp.push(shuffledDeckTemp[0]);
      shuffledDeckTemp = _.drop(shuffledDeckTemp);
    }
    cardsInPlayerHand.push(temp);
    temp = [];
  }
  return cardsInPlayerHand;
}

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

function scoringHands(PlayerHand) {
  var handScores = [];
  for (var i = 0; i < PlayerHand.length; i++) {
    var cardsPerPlayer = PlayerHand[i];
    cardsPerPlayer = assignValuesToCards(cardsPerPlayer);
    handScores.push(_.sum(cardsPerPlayer));
    cardsPerPlayer = [];
  }
  return handScores;
}

function storingIndexOfMaxTerms(array) {
  var max = _.max(array);
  var indexOfMaxTerms = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === max) {
      indexOfMaxTerms.push(i);
    }
  }
  return indexOfMaxTerms;
}

function playingTheGame(playerName, handSize) {
  var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  var playersFinalResult = [];
  var finalAnnouncement = '';
  var winner = [];

  // Running the game
  var newDeck = creatingNewDeck(cardRank, cardSuit);
  var shuffledDeck = shuffleDeck(newDeck);
  var playerHand = dealingCards(shuffledDeck, handSize, playerName);
  var playerHandScore = scoringHands(playerHand);

  // Storing values into player objects
  for (var i = 0; i < playerName.length; i++) {
    var temp = {};
    temp.name = playerName[i];
    temp.hand = playerHand[i];
    temp.handScore = playerHandScore[i];
    playersFinalResult.push(temp);
    temp = {};
  }
  // Deciding winners
  var indexOfWinners = storingIndexOfMaxTerms(playerHandScore);
  for (var k = 0; k < indexOfWinners.length; k++) {
    winner.push(playerName[indexOfWinners[k]]);
  }
  console.log(playersFinalResult);
  // console.log(winner);

  // Winner announcement
  if (winner.length === 1) {
    finalAnnouncement = 'The only winner is ' + winner[0];
  } else {
    for (var j = 0; j < winner.length; j++) {
      if (j === winner.length - 1) {
        finalAnnouncement += 'and ' + winner[j];
      } else { finalAnnouncement += winner[j] + ', '; }
    }
    finalAnnouncement = finalAnnouncement + ' were winners';
    // Playing until there is only one winner
    var onlyWinner = playingTheGame(winner, 2);
    if (onlyWinner.length === 1) {
      finalAnnouncement = finalAnnouncement + ' but, ' + onlyWinner[0] + ' is the final winner';
    }
  }
  console.log(finalAnnouncement);
  return winner;
}

var playerName = ['Player1', 'Player2', 'Player3', 'Player4', 'player5', 'player6'];

playingTheGame(playerName, 2);
