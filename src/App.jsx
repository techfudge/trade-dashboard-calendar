
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Suspense } from 'react';
// import Dashboard from './pages/Dashboard';

// // Add error boundary and logging
// function CalendarLoader() {
//   try {
//     const CalendarPage = React.lazy(() => import('./pages/calendar'));
//     return (
//       <Suspense fallback={<div>Loading calendar...</div>}>
//         <CalendarPage />
//       </Suspense>
//     );
//   } catch (error) {
//     console.error('Failed to load calendar:', error);
//     return <div>Error loading calendar page</div>;
//   }
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/calendar" element={<CalendarLoader />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={
//           <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
//             <h1 style={{ color: 'white' }}>Welcome Home</h1>
//             <p style={{ color: '#ccc' }}>Available routes:</p>
//             <ul style={{ color: '#aaa' }}>
//               <li><a href="/calendar" style={{ color: 'lightblue' }}>/calendar</a></li>
//               <li><a href="/dashboard" style={{ color: 'lightblue' }}>/dashboard</a></li>
//             </ul>
//           </div>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;  //tuff

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} /> {/* Default to Dashboard */}
      </Routes>
    </Router>
  );
}

export default App; 

