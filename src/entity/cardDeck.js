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
  return SUITS.flatMap((suit) => VALUES.map((value) => ({ suit, value })));
}
const cardDeck = createCardDeck();

function shuffleDeck(deck) {
  const currentDeck = [...deck];
  const shuffledDeck = currentDeck.sort(() => 0.5 - Math.random());

  return shuffledDeck;
}

export { createCardDeck, cardDeck, shuffleDeck };
