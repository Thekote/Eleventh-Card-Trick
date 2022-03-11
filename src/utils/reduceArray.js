function reduceArray(array, elementIndex) {
  const arrayCopy = [...array];
  const makeReducedArray = [
    arrayCopy[elementIndex === 0 ? 1 : 0],
    arrayCopy[elementIndex],
    arrayCopy[elementIndex === 2 ? 1 : 2],
  ].flat();
  return makeReducedArray.reduce(
    // eslint-disable-next-line array-callback-return
    (acc, element, index) => {
      if (index % 3 === 0) {
        return [[element, ...acc[0]], acc[1], acc[2]];
      } else if (index % 3 === 1) {
        return [acc[0], [element, ...acc[1]], acc[2]];
      } else if (index % 3 === 2) {
        return [acc[0], acc[1], [element, ...acc[2]]];
      }
    },
    [[], [], []]
  );
}

export { reduceArray };
