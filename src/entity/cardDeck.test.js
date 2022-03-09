import { createCardDeck, cardDeck, shuffleDeck } from "./cardDeck";
import { getArrayItems } from "../utils/arrayItems";

const EXPECTED = [
  { suit: "Hearts", value: "A" },
  { suit: "Hearts", value: "2" },
  { suit: "Hearts", value: "3" },
  { suit: "Hearts", value: "4" },
  { suit: "Hearts", value: "5" },
  { suit: "Hearts", value: "6" },
  { suit: "Hearts", value: "7" },
  { suit: "Hearts", value: "8" },
  { suit: "Hearts", value: "9" },
  { suit: "Hearts", value: "10" },
  { suit: "Hearts", value: "J" },
  { suit: "Hearts", value: "Q" },
  { suit: "Hearts", value: "K" },
  { suit: "Diamonds", value: "A" },
  { suit: "Diamonds", value: "2" },
  { suit: "Diamonds", value: "3" },
  { suit: "Diamonds", value: "4" },
  { suit: "Diamonds", value: "5" },
  { suit: "Diamonds", value: "6" },
  { suit: "Diamonds", value: "7" },
  { suit: "Diamonds", value: "8" },
  { suit: "Diamonds", value: "9" },
  { suit: "Diamonds", value: "10" },
  { suit: "Diamonds", value: "J" },
  { suit: "Diamonds", value: "Q" },
  { suit: "Diamonds", value: "K" },
  { suit: "Spades", value: "A" },
  { suit: "Spades", value: "2" },
  { suit: "Spades", value: "3" },
  { suit: "Spades", value: "4" },
  { suit: "Spades", value: "5" },
  { suit: "Spades", value: "6" },
  { suit: "Spades", value: "7" },
  { suit: "Spades", value: "8" },
  { suit: "Spades", value: "9" },
  { suit: "Spades", value: "10" },
  { suit: "Spades", value: "J" },
  { suit: "Spades", value: "Q" },
  { suit: "Spades", value: "K" },
  { suit: "Clubs", value: "A" },
  { suit: "Clubs", value: "2" },
  { suit: "Clubs", value: "3" },
  { suit: "Clubs", value: "4" },
  { suit: "Clubs", value: "5" },
  { suit: "Clubs", value: "6" },
  { suit: "Clubs", value: "7" },
  { suit: "Clubs", value: "8" },
  { suit: "Clubs", value: "9" },
  { suit: "Clubs", value: "10" },
  { suit: "Clubs", value: "J" },
  { suit: "Clubs", value: "Q" },
  { suit: "Clubs", value: "K" },
];

describe("cardDeck", () => {
  it("should return the created deck", () => {
    expect(createCardDeck()).toEqual(EXPECTED);
  });
});

describe("shuffleDeck", () => {
  it("should return a shuffled deck different from cardDeck", () => {
    expect(cardDeck).not.toStrictEqual(shuffleDeck(cardDeck));
  });

  it("should return a shuffled array with the same elements", () => {
    expect(shuffleDeck(cardDeck)).toEqual(expect.arrayContaining(cardDeck));
  });

  it("should return an empty array if the params is an empty array", () => {
    const testDeck = [];
    expect(shuffleDeck(testDeck)).toEqual(testDeck);
  });

  it("should return the same array if the array has only one element", () => {
    const oneCard = [1];
    expect(shuffleDeck(oneCard)).toEqual(oneCard);
  });
});

describe("getArrayItems", () => {
  it("should return the first 21 items", () => {
    const initalItems = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    const expectedItems = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ];

    expect(getArrayItems(initalItems)).toEqual(expectedItems);
  });
});
