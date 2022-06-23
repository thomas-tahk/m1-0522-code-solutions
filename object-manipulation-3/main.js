console.log('Lodash is loaded:', typeof _ !== 'undefined');

// default players
var fourPlayers = [
  {
    name: 'Tom',
    hand: []
  },
  {
    name: 'Rocket',
    hand: []
  },
  {
    name: 'Sue',
    hand: []
  },
  {
    name: 'Bryan',
    hand: []
  }
];

// create a deck
function createStandardDeck() {
  var standardDeck = [];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  for (let i = 0; i < suits.length; i++) {
    for (let r = 0; r < ranks.length; r++) {
      const card = { suit: suits[i], rank: ranks[r] };
      standardDeck.push(card);
    }
  }
  return standardDeck;
}

// shuffle the deck
function shuffleCards(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * i);
    const tempCard = deck[i];
    deck[i] = deck[swapIndex];
    deck[swapIndex] = tempCard;
  }
  return deck;
}

// dealing cards to each player
function dealCards(players, deck, cards) {
  var deckCount = 0;
  for (let i = 0; i < players.length; i++) {
    for (let c = 0; c < cards; c++) {
      players[i].hand.push(deck[deckCount]);
      deckCount += 1;
    }
  }
}

// how to count points
function points(card) {
  if (card === 'Ace') {
    return 11;
  } else if (card === 'Jack' || card === 'Queen' || card === 'King') {
    return 10;
  } else if (Number(card) >= 2 && Number(card) <= 10) {
    return Number(card);
  }
}

// getting score of any given hand
function score(hand) {
  var total = 0;
  for (let i = 0; i < hand.length; i++) {
    total += points(hand[i].rank);
  }
  return total;
}

// list all the scores
function allScores(players) {
  var scoresArray = [];
  for (let i = 0; i < players.length; i++) {
    scoresArray.push(score(players[i].hand));
  }
  return scoresArray;
}

// a function that takes in all the scores, figures out the highest score
function highestScore(scores) {
  return Math.max(...scores);
}

// a function to figure out what indices(can be 1 to all players) highest score occurs
//     looks through all of the scores to find all the indices highest score occurs
//     return all the indices that the highest score occurs (an array of index numbers)
function winningIndex(players, scores) {
  var highScore = highestScore(scores);
  var indexList = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
      indexList.push(i);
    }
  }
  return indexList;
}

// a function that takes an indexes array
// if the length is 1, then declare winner, return true and the single winner
// else print out all the 'winners' that are tied, return false and the tied 'winners'
function declareWinner(players, scores) {
  var winIndices = winningIndex(players, scores);
  var winners = [];
  if (winIndices.length === 1) {
    winners.push(players[winIndices[0]]);
    console.log(`And the winner is ${winners[0].name}!`);
    return [true, winners];
  } else if (winIndices.length > 1) {
    console.log('We have a tie for the following players:');
    for (let i = 0; i < winIndices.length; i++) {
      winners.push(players[winIndices[i]]);
      console.log(winners[i].name);
    }
    return [false, winners];
  }
}

function playTheGame(players, cards) {
  var freshDeck = createStandardDeck();
  shuffleCards(freshDeck);
  dealCards(players, freshDeck, cards);
  var gameState = declareWinner(players, allScores(players));
  var isGameOver = gameState[0];
  var tiedPlayers = gameState[1];
  if (isGameOver) {
    console.log('Game is done!');
  } else {
    console.log('Break the tie!');
    playTheGame(tiedPlayers, cards);
  }
}

playTheGame(fourPlayers, 2);
