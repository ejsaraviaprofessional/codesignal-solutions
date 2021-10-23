export const byReduce = (input: number[]): number => {
  const result = input.reduce((prev, curr, index) => {
    if (index === 0) return prev;
    const currentProduct = curr * input[index - 1];

    if (currentProduct > prev) prev = currentProduct;

    return prev;
  }, 0);
  return result;
};

export const byForEach = (input: number[]): number => {
  let result = 0;
  input.forEach((value, index) => {
    const isFirstElement = index !== 0;
    if (isFirstElement) {
      const currentProduct = value * input[index - 1];

      if (currentProduct > result) result = currentProduct;
    }
  });
  return result;
};
