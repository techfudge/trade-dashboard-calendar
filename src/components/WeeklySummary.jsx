// components/WeeklySummary.jsx
import React from 'react';

const WeeklySummary = ({ week }) => {
  return (
    <div className="flex flex-col items-center text-xs text-white px-2 py-4 bg-[#111827] rounded-md">
      <div className="font-semibold">Week {week.number}</div>
      <div className="text-green-400">${(week.pnl / 1000).toFixed(2)}K</div>
      <div className="text-blue-400">{week.days} {week.days === 1 ? 'day' : 'days'}</div>
    </div>
  );
};

export default WeeklySummary;
