// utils/helpers.js
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, getWeek } from 'date-fns';

export function generateCalendarData(tradeData, year, month) {
  const firstDay = startOfMonth(new Date(year, month));
  const lastDay = endOfMonth(firstDay);
  const days = eachDayOfInterval({
    start: startOfWeek(firstDay, { weekStartsOn: 0 }),
    end: endOfWeek(lastDay, { weekStartsOn: 0 })
  });

  const dayEntries = days.map(date => {
    const formatted = format(date, 'yyyy-MM-dd');
    const found = tradeData.find(d => d.date === formatted);
    return {
      date,
      ...found || { pnl: null, trades: null, winRate: null }
    };
  });

  const weeks = [];
  for (let i = 0; i < dayEntries.length; i += 7) {
    const slice = dayEntries.slice(i, i + 7);
    const summary = slice.reduce((acc, d) => {
      if (d.pnl !== null) {
        acc.pnl += d.pnl;
        acc.days += 1;
      }
      return acc;
    }, { pnl: 0, days: 0 });

    weeks.push({
      number: getWeek(slice[0].date),
      days: summary.days,
      pnl: summary.pnl,
      daysArray: slice
    });
  }

  return weeks;
}

import { format } from 'date-fns';
