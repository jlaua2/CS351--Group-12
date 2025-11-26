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
import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import SearchPage from "./Components/SearchPage.jsx";
import ResultsPage from "./Components/ResultsPage.jsx";
import PrivacyPage from "./Components/PrivacyPage.jsx";
import FavoritePage from "./Components/FavoritePage.jsx";

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
  const pillBtn = (hovered) => ({
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: color.white,
    border: 0,
    padding: "8px 12px",
    borderRadius: 6,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: hovered
      ? "0 4px 15px rgba(255, 80, 120, 0.4)"
      : "0 2px 8px rgba(0,0,0,0.1)",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    textDecoration: "none",
  });

  // Custom hook to get the previous location
  const usePreviousLocation = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location);

    useEffect(() => {
      prevLocationRef.current = location;
    }, [location]);

    return prevLocationRef.current;
  };

  const AppHeader = () => {
    const location = useLocation();
    const [isPriceWiseHovered, setIsPriceWiseHovered] = useState(false);
    const [isBackHovered, setIsBackHovered] = useState(false);
    const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);

    const isOnFavoritePage = location.pathname === "/favorite";
    const isOnAboutPage = location.pathname === "/about";
    const isOnPrivacyPage = location.pathname === "/privacy";

    // Check if we are on one of the secondary pages
    const onSecondaryPage = isOnFavoritePage || isOnAboutPage || isOnPrivacyPage;

    // Show "Back to Results" if we are on a secondary page and we have the right navigation state.
    const showBackToResults = onSecondaryPage && location.state?.from === "results";

    // If we are on the results page, set the state for the next navigation. Otherwise, preserve it.
    const navState = location.pathname.startsWith("/results") ? { from: "results" } : location.state;

    return (
      <header style={bar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={pillBtn(isPriceWiseHovered)}
            onMouseEnter={() => setIsPriceWiseHovered(true)}
            onMouseLeave={() => setIsPriceWiseHovered(false)}
          >
            PriceWise
          </button>
        </Link>
        {showBackToResults && (
          <Link to="/results" style={{ textDecoration: "none" }}>
            <button
              style={pillBtn(isBackHovered)}
              onMouseEnter={() => setIsBackHovered(true)}
              onMouseLeave={() => setIsBackHovered(false)}
            >
              Back to Results
            </button>
          </Link>
        )}
        <div style={{ display: "flex", gap: 12 }}>
          {!isOnFavoritePage && (
            <Link to="/favorite" state={navState}>
              <button
                style={pillBtn(isFavoriteHovered)}
                onMouseEnter={() => setIsFavoriteHovered(true)}
                onMouseLeave={() => setIsFavoriteHovered(false)}
              >
                Favorite
              </button>
            </Link>
          )}
        </div>
      </header>
    );
  };

  // A smaller component to handle the footer logic
  const AppFooter = () => {
    const location = useLocation();
    const [isPrivacyHovered, setIsPrivacyHovered] = useState(false);

    const isOnPrivacyPage = location.pathname === "/privacy";

    // If we are on the results page, set the state for the next navigation. Otherwise, preserve it.
    const navState = location.pathname.startsWith("/results") ? { from: "results" } : location.state;

    return (
      <footer style={bar}>
        {/* Placeholder to maintain spacing */}
        <div />
        {/* Privacy link on the right */}
        {!isOnPrivacyPage && (
          <Link to="/privacy" state={navState}>
            <button
              style={pillBtn(isPrivacyHovered)}
              onMouseEnter={() => setIsPrivacyHovered(true)}
              onMouseLeave={() => setIsPrivacyHovered(false)}
            >
              Privacy
            </button>
          </Link>
        )}
      </footer>
    );
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
        <AppHeader />

        {/* Main route content */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </div>

        {/* Footer styled like Figma */}
        <AppFooter />
      </div>
    </Router>
  );
}
