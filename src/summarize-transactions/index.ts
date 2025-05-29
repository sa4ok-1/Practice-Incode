import { SummarizeTransactionsFn } from 'summarize-transactions/types';

/**
 * @task Summarize Transactions By User
 * @description Given an array of transactions (which may be in any order), group them by `userId` and compute:
 * - totalIncome: total sum of transactions with type 'income'
 * - totalExpense: total sum of transactions with type 'expense'
 * - net: totalIncome - totalExpense
 *
 * Return an array of summaries per user.
 * Each user should appear only once in the result.
 * The order of the result does not matter.
 * @example
 * Input:
 * [
 *   { userId: 1, amount: 100, type: 'income' },
 *   { userId: 1, amount: 50, type: 'expense' },
 *   { userId: 2, amount: 200, type: 'income' },
 *   { userId: 1, amount: 25, type: 'expense' },
 * ]
 *
 * Output:
 * [
 *   { userId: 1, totalIncome: 100, totalExpense: 75, net: 25 },
 *   { userId: 2, totalIncome: 200, totalExpense: 0, net: 200 },
 * ]
 */
export const summarizeTransactions: SummarizeTransactionsFn = (
  transactions,
) => {
  const result: Record<number, { totalIncome: number; totalExpense: number }> =
    {};

  transactions.forEach((tr) => {
    const userId = tr.userId;

    if (!result[userId]) {
      result[userId] = { totalIncome: 0, totalExpense: 0 };
    }

    if (tr.type === 'income') {
      result[userId].totalIncome += tr.amount;
    } else {
      result[userId].totalExpense += tr.amount;
    }
  });

  const finalObj = [];

  for (const key in result) {
    finalObj.push({
      userId: Number(key),
      totalIncome: result[key].totalIncome,
      totalExpense: result[key].totalExpense,
      net: result[key].totalIncome - result[key].totalExpense,
    });
  }

  return finalObj;
};

console.log(
  summarizeTransactions([
    { userId: 1, amount: 100, type: 'income' },
    { userId: 1, amount: 50, type: 'expense' },
    { userId: 2, amount: 200, type: 'income' },
    { userId: 1, amount: 25, type: 'expense' },
  ]),
);
