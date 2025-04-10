// components/DayCard.jsx
import React from 'react';

const DayCard = ({ day }) => {
  const { pnl, trades, winRate, date } = day || {};
  const isPositive = pnl > 0;

  return (
    <div className={`rounded-xl p-2 text-center shadow-md ${pnl !== null ? (isPositive ? 'bg-green-900' : 'bg-red-900') : 'bg-gray-800'} text-white`}>
      {pnl !== null ? (
        <>
          <div className="text-sm font-semibold">
            {pnl < 0 ? '-' : '+'}${Math.abs(pnl / 1000).toFixed(2)}K
          </div>
          <div className="text-xs">{trades} {trades === 1 ? 'trade' : 'trades'}</div>
          <div className="text-xs">{(winRate * 100).toFixed(0)}%</div>
        </>
      ) : (
        <div className="text-xs text-gray-500">{date.getDate()}</div>
      )}
    </div>
  );
};

export default DayCard;
