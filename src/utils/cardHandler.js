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
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return { suit, value };
    });
  });
}
const cardDeck = createCardDeck();

function shuffleDeck(deck) {
  const currentDeck = [...deck];
  const shuffledDeck = currentDeck.sort(() => 0.5 - Math.random());

  return shuffledDeck;
}

function getFirst21Items(items) {
  return items.slice(0, 21);
}

export { cardDeck, shuffleDeck, getFirst21Items };
