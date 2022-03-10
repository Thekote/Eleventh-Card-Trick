function magicTrick(array, rowIndex) {
  const arrayCopy = [...array];
  const magicArray = [
    arrayCopy[rowIndex === 0 ? 1 : 0],
    arrayCopy[rowIndex],
    arrayCopy[rowIndex === 2 ? 1 : 2],
  ].flat();

  return magicArray.reduce(
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

export { magicTrick };
