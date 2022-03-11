function sliceArray(array) {
  const fistArrayElement = array.slice(0, 7);
  const secondArrayElement = array.slice(7, 14);
  const thirdArrayElement = array.slice(14, 22);

  return [fistArrayElement, secondArrayElement, thirdArrayElement];
}

export { sliceArray };
