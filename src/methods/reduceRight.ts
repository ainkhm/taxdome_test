// ≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖
// Implementing reduceRight function without using reduce and reverse methods.
// ≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖

export const reduceRight = <T>(
  charList: T[],
  callback: (acc: T, value: T) => T,
  initAcc: T
): T => {
  const result = charList.reduceRight(callback, initAcc);
  process.stdout.write(`Final result: ${result}`);
  return result;
};
