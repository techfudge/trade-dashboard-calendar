
import { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [weekData, setWeekData] = useState([]);
  const [colorSettings, setColorSettings] = useState({
    win: '#10b981',
    loss: '#ef4444'
  });

  // Initialize data
  useEffect(() => {
    const initialData = Array.from({ length: 28 }, (_, i) => ({
      week: i + 1,
      amount: "$0",
      trades: "0 trades",
      percentage: "0%",
      isSummary: false
    }));
    setWeekData(initialData);
  }, []);

  const handleUpdateWeek = (weekIndex, field, value) => {
    setWeekData(prev => prev.map((week, i) => {
      if (i !== weekIndex) return week;
      
      const updated = { ...week };
      
      if (field === 'percentage') {
        const numValue = parseFloat(value) || 0;
        updated[field] = `${Math.min(100, Math.max(0, numValue))}%`;
      } else {
        updated[field] = value;
      }
      
      return updated;
    }));
  };

  return (
    <div className="dashboard">
      <div className="color-controls">
        <label>
          Win Color:
          <input 
            type="color" 
            value={colorSettings.win}
            onChange={(e) => setColorSettings(prev => ({
              ...prev,
              win: e.target.value
            }))}
          />
        </label>
        <label>
          Loss Color:
          <input 
            type="color" 
            value={colorSettings.loss}
            onChange={(e) => setColorSettings(prev => ({
              ...prev,
              loss: e.target.value
            }))}
          />
        </label>
      </div>

      <div className="weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="week-cards">
        {weekData.map((week, index) => (
          <div 
            key={index}
            className={`week-card ${
              parseFloat(week.percentage) > 50 ? 'win' : 
              parseFloat(week.percentage) < 50 ? 'loss' : ''
            }`}
          >
            <div className="week-number">Week {week.week}</div>
            <div className="amount">{week.amount}</div>
            <div className="trades">{week.trades}</div>
            <div className="percentage">{week.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}