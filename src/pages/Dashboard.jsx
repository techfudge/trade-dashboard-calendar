
import { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  // Initialize state with proper data structure
  const [weeks, setWeeks] = useState(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      week: i + 1,
      pips: "",
      profit: "",
      result: "neutral" // 'win', 'loss', or 'neutral'
    }));
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('forexDashboardData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setWeeks(parsedData);
        }
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem('forexDashboardData', JSON.stringify(weeks));
  }, [weeks]);

  // Handle win/loss selection
  const handleSetResult = (weekIndex, result) => {
    setWeeks(prev => prev.map((week, i) => 
      i === weekIndex ? { ...week, result } : week
    ));
  };

  // Handle input changes
  const handleInputChange = (weekIndex, field, value) => {
    setWeeks(prev => prev.map((week, i) => 
      i === weekIndex ? { ...week, [field]: value } : week
    ));
  };

  return (
    <div className="dashboard-container">
      {/* Weekday headers */}
      <div className="weekdays-header">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid">
        {weeks.map((week, index) => (
          <div 
            key={week.week} 
            className={`calendar-cell ${week.result}`}
          >
            <div className="week-number">Week {week.week}</div>
            
            {/* Pips input */}
            <input
              type="text"
              value={week.pips}
              onChange={(e) => handleInputChange(index, 'pips', e.target.value)}
              placeholder="Pips"
              className="pips-input"
            />
            
            {/* Profit input */}
            <input
              type="text"
              value={week.profit}
              onChange={(e) => handleInputChange(index, 'profit', e.target.value)}
              placeholder="$ Profit"
              className="profit-input"
            />
            
            {/* Win/Loss buttons */}
            <div className="result-controls">
              <button
                className={`win-btn ${week.result === 'win' ? 'active' : ''}`}
                onClick={() => handleSetResult(index, 'win')}
              >
                Win
              </button>
              <button
                className={`loss-btn ${week.result === 'loss' ? 'active' : ''}`}
                onClick={() => handleSetResult(index, 'loss')}
              >
                Loss
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Save indicator */}
      <div className="save-notice">
        Data saves automatically!
      </div>
    </div>
  );
}