export const FetchRewardsApi = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { cusId: 1, amount: 120, date: '2023-01-15' },
          { cusId: 1, amount: 75, date: '2023-01-20' },
          { cusId: 2, amount: 200, date: '2023-02-10' },
          { cusId: 2, amount: 50, date: '2023-02-15' },
          { cusId: 1, amount: 300, date: '2023-03-05' },
        ]);
      }, 1000);
    });
  };