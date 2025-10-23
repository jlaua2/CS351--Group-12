// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SearchPage from './Components/SearchPage.jsx';    // Ensure path matches your structure
// import ResultsPage from './Components/ResultsPage.jsx'; // Ensure path matches your structure

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Placeholder Header and Footer for visual consistency */}
//         <header style={{ padding: '10px', background: '#333', color: 'white' }}>
//           PriceWise Header - Login/Signup | Favorite
//         </header>

//         <Routes>
//           {/* Route for the Search Page (Homepage) */}
//           <Route path="/" element={<SearchPage />} />
          
//           {/* Route for the Results Page */}
//           <Route path="/results" element={<ResultsPage />} />
//         </Routes>

//         <footer style={{ padding: '10px', background: '#333', color: 'white', marginTop: '50px' }}>
//           About | Privacy
//         </footer>
//       </div>
//     </Router>
//   );
// }
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage.jsx";
import ResultsPage from "./Components/ResultsPage.jsx";

export default function App() {
  // Figma-style colors and tokens
  const color = {
    dark: "#2f2f2f",
    white: "#ffffff",
    light: "rgba(255,255,255,0.2)",
  };

  const bar = {
    background: color.dark,
    color: color.white,
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const brandWrap = { display: "flex", alignItems: "center", gap: 10 };
  const logo = {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "#555",
    color: "#fff",
    fontSize: 12,
    display: "grid",
    placeItems: "center",
  };
  const brandPill = {
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    borderRadius: 6,
    padding: "4px 8px",
    fontSize: 14,
  };
  const pillBtn = {
    background: color.light,
    color: "#fff",
    border: 0,
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer",
  };

  return (
    <Router>
      <div
        style={{
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Inter, sans-serif',
          background: color.white,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top bar styled like Figma */}
        <header style={bar}>
          <div style={brandWrap}>
            <div style={logo}>Logo</div>
            <span style={brandPill}>PriceWise</span>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={pillBtn}>Login/Signup</button>
            <button style={pillBtn}>Favorite</button>
          </div>
        </header>

        {/* Main route content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>

        {/* Footer styled like Figma */}
        <footer style={bar}>
          <button style={pillBtn}>About</button>
          <button style={pillBtn}>Privacy</button>
        </footer>
      </div>
    </Router>
  );
}




