
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from './pages/calendar';  // Corrected the import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/" element={<h1 className="text-white">Welcome Home</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
