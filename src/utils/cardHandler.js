const SUITS = ["Hearts", "Diamonds", "Spades", "Clubs"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function createCardDeck() {
  let deck = [];
  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

const cardDeck = createCardDeck();

function shuffleDeck(deck) {
  const currentDeck = [...deck];
  let counter = currentDeck.length,
    temp,
    i;

  while (counter) {
    i = Math.floor(Math.random() * counter--);
    temp = currentDeck[counter];
    currentDeck[counter] = currentDeck[i];
    currentDeck[i] = temp;
  }
  return currentDeck;
}

function getFirst21Items(items) {
  return items.slice(0, 21);
}

export { cardDeck, shuffleDeck, getFirst21Items };
