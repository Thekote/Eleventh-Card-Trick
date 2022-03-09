import { cardDeck, shuffleDeck } from "./cardDeck";
import { getArrayItems } from "../utils/arrayItems";

describe("cardDeck", () => {
  it("should return the created deck", () => {
    expect(cardDeck).toMatchSnapshot();
  });
});

describe("shuffleDeck", () => {
  it("should return a shuffled deck", () => {
    expect(cardDeck).not.toStrictEqual(shuffleDeck(cardDeck));
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
