import { reduceArray } from "../../utils/reduceArray";

const ARRAY = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
];

describe("reduceArray", () => {
  it("should return a different array after reducing", () => {
    expect(reduceArray(ARRAY, 1)).not.toStrictEqual(ARRAY);
  });
});
