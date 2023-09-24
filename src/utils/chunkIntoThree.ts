export function chunkIntoThree(inputArray: any[]) {
  const len = inputArray.length;
  const size = Math.ceil(len / 3);

  const chunk1 = inputArray.slice(0, size);
  const chunk3 = inputArray.slice(size * 2);
  const chunk2 = inputArray.slice(size, size * 2);

  return [chunk1, chunk2, chunk3];
}
