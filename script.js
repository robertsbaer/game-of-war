//create the card

class Card {
  constructor(value, suit) {
    this.suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
    this.values = ["", "", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    this.value = value;
    this.suit = suit;
  }
// compare the cards
    //if the value of the first players hand is less
  less(otherHand) {
    if (this.value < otherHand.value) {
      return true;
    } else if (this.value === otherHand.value) {
      return this.suit < otherHand.suit;
    }
    return false;
  }
    //if the value of the first players hand is greater
  greater(otherHand) {
    if (this.value > otherHand.value) {
      return true;
    } else if (this.value === otherHand.value) {
      return this.suit > otherHand.suit;
    }
    return false;
  }
    //display the value and the suit
  text() {
    return this.values[this.value] + " of " + this.suits[this.suit];
  }
}

//create and shuffle the deck
//remove card that has been played
class Deck {
  constructor() {
    this.cards = [];
    for (let i = 2; i <= 14; i++) {
      for (let j = 0; j <= 3; j++) {
        let card = new Card(i, j);
        this.cards.push(card.text());
      }
    }
    this.shuffle(this.cards);
    this.shuffle(this.cards);
  }
//remove card from deck
  removeCard() {
    if (this.cards.length === 0) {
      return;
    }
    return this.cards.pop();
  }
//shuffle the cards
  shuffle() {
    for (let i = 0; i <= 51; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  }
}

//define player
class Player {
  constructor(name) {
    this.wins = 0;
//    this.card = "";
    this.name = name;
  }
}

//take shuffled deck and the players
class Game {
  constructor() {
    this.deck = new Deck();
    const name1 = ("Player 1");
    const name2 = ("Player 2");
    const name3 = ("No one");
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
  }

  wins(winner) {
    console.log(`${winner} wins this round`);
  }
//call the play
  draw(player1Turn, player2Turn) {
    console.log(
      `player 1 has ${player1Turn} and player 2 has ${player2Turn}`
    );
  }
//game play
  playGame() {
    const cards = this.deck.cards;
    console.log("Start Game");
    while (cards.length >= 2) {
      const player1turn = this.deck.removeCard();
      const player2Turn = this.deck.removeCard();
      this.draw(player1turn, player2Turn);
      if (player1turn > player2Turn) {
        this.player1.wins++;
        this.wins(this.player1.name);
      } else {
        this.player2.wins++;
        this.wins(this.player2.name);
      }
    }
      //declare the winner
    const win = this.winner(this.player1, this.player2);
    console.log(`${win} is the winner`);
  }
  winner(player1, player2) {
      //if cards have equal value
    if (player1.wins === player2.wins) {
      return "Nobody";
    } else {
      return player1.wins > player2.wins && player1.name || player2.name;
    }
  }
}

const game = new Game();
game.playGame();