const shuffleArray = (originalArray: Array<any>) => {
  const array = [...originalArray];
  for (let index = array.length - 1; index > 0; index--) {
    const toSwap = Math.floor(Math.random() * (index + 1));
    [array[index], array[toSwap]] = [array[toSwap], array[index]];
  };
  return array;
};

export default shuffleArray;