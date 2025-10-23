import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage.jsx';    // Ensure path matches your structure
import ResultsPage from './Components/ResultsPage.jsx'; // Ensure path matches your structure

function App() {
  return (
    <Router>
      <div className="App">
        {/* Placeholder Header and Footer for visual consistency */}
        <header style={{ padding: '10px', background: '#333', color: 'white' }}>
          PriceWise Header - Login/Signup | Favorite
        </header>

        <Routes>
          {/* Route for the Search Page (Homepage) */}
          <Route path="/" element={<SearchPage />} />
          
          {/* Route for the Results Page */}
          <Route path="/results" element={<ResultsPage />} />
        </Routes>

        <footer style={{ padding: '10px', background: '#333', color: 'white', marginTop: '50px' }}>
          About | Privacy
        </footer>
      </div>
    </Router>
  );
}

export default App;
