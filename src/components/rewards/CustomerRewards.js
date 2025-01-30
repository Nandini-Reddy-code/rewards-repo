import React from 'react';

const CustomerRewards = ({ cusId, rewards }) => {
  return (
    <div>
      <h2>CustomerID: {cusId}</h2>
      <p>Total Points- {rewards.total}</p>
      <h3>Monthly Points</h3>
      <ul>
        {Object.keys(rewards.monthly).map((month) => (
          <li key={month}>
            Month {month}: {rewards.monthly[month]} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerRewards;