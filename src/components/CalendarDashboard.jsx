// components/CalendarDashboard.jsx
import React from 'react';
import DayCard from './DayCard';
import WeeklySummary from './WeeklySummary';
import { generateCalendarData } from '../utils/helpers';

const mockData = [
  { date: '2025-02-03', pnl: -2860, trades: 4, winRate: 0.0 },
  { date: '2025-02-04', pnl: 117, trades: 6, winRate: 0.33 },
  { date: '2025-02-05', pnl: -1970, trades: 4, winRate: 0.25 },
  { date: '2025-02-06', pnl: 3450, trades: 4, winRate: 0.5 },
  { date: '2025-02-07', pnl: 3690, trades: 1, winRate: 1.0 },
  // ... Add all the data from the screenshot as needed
];

const CalendarDashboard = () => {
  const year = 2025;
  const month = 1; // February (0-indexed)
  const weeks = generateCalendarData(mockData, year, month);

  return (
    <div className="p-4 bg-[#0F172A] min-h-screen text-white">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-7 grid grid-cols-7 gap-2">
          {weeks.map(week => week.daysArray.map(day => (
            <DayCard key={day.date} day={day} />
          )))}
        </div>
        <div className="flex flex-col gap-4">
          {weeks.map(week => (
            <WeeklySummary key={week.number} week={week} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarDashboard;
