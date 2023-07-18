import { Item } from "../interfaces";

// ≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖
// Implementing DelayedConsoleOutput function
// ≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖≖

export const delayedConsoleOutput = async (
  arrayList: Item[]
): Promise<void> => {
  let totalDelay = 0;
  for (const item of arrayList) {
    await delay(item.timeout);
    totalDelay += item.timeout;
    console.log(
      `${item.name} - executed on [${Math.floor(totalDelay / 1000)}] second`
    );
  }
};

const delay = (timeout: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
