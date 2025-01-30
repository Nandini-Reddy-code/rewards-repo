import React, { useEffect, useState } from 'react';
import { FetchRewardsApi } from './FetchRewardsApi';
import CustomerRewards from './CustomerRewards';
import { CalculateRewardPoints } from './CalculateRewardPoints';

const RewardsComponent = () => {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTransactions = async () => {
    const data = await FetchRewardsApi();
    setTransactions(data);
    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const rewards = transactions.reduce((acc, transaction) => {
    const { cusId, amount, date } = transaction;
    const month = new Date(date).getMonth() + 1;
    const points = CalculateRewardPoints(amount);

    if (!acc[cusId]) {
      acc[cusId] = { total: 0, monthly: {} };
    }
    acc[cusId].total += points;
    if (!acc[cusId].monthly[month]) {
      acc[cusId].monthly[month] = 0;
    }
    acc[cusId].monthly[month] += points;

    return acc;
  }, {});

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ textAlign: "left", padding: "20px" }}>
      <h1>Customer Rewards</h1>
      {Object.keys(rewards).map((cusId) => (
        <CustomerRewards key={cusId} cusId={cusId} rewards={rewards[cusId]} />
      ))}
    </div>
  );
};

export default RewardsComponent;