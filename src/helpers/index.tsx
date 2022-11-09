export const createArray = (beforeNumber: number) => {
  const result = [];
  for (let i = 0; i < beforeNumber; i += 1) {
    result.push(i);
  }
  return result;
};

// console.log(createArray(60));
