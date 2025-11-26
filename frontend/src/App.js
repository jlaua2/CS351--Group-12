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

  // --- Component Definitions ---

  const AppHeader = () => {
    const location = useLocation();
    const [isPriceWiseHovered, setIsPriceWiseHovered] = useState(false);
    const [isBackHovered, setIsBackHovered] = useState(false);
    const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);

    const isOnFavoritePage = location.pathname === "/favorite";
    const isOnAboutPage = location.pathname === "/about";
    const isOnPrivacyPage = location.pathname === "/privacy";

    const onSecondaryPage = isOnFavoritePage || isOnAboutPage || isOnPrivacyPage;
    const showBackToResults = onSecondaryPage && location.state?.from === "results";
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

  const AppFooter = () => {
    const location = useLocation();
    const [isPrivacyHovered, setIsPrivacyHovered] = useState(false);

    const isOnPrivacyPage = location.pathname === "/privacy";
    const navState = location.pathname.startsWith("/results") ? { from: "results" } : location.state;

    return (
      <footer style={{ ...bar, position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1200 }}>
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

  // --- Main Render Function ---

  return (
    <Router>
      <AppContentWrapper
        AppHeader={AppHeader}
        AppFooter={AppFooter}
        color={color}
      />
    </Router>
  );
}

// Wrapper component to apply conditional styling using useLocation
const AppContentWrapper = ({ AppHeader, AppFooter, color }) => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/'; // Check if we are on the homepage

  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Inter, sans-serif',
        background: color.white,
        height: "100vh", 
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevents scrollbar on the entire page
      }}
    >
      <AppHeader />

      {/* Main route content container */}
      <div style={{ 
        flex: 1, 
        position: 'relative',
        // CRITICAL FIX: Set overflow to 'hidden' only on the SearchPage, 'auto' otherwise.
        // This makes sure the SearchPage doesn't scroll, but the other pages do.
        overflowY: isSearchPage ? "hidden" : "auto", 
      }}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </div>
      
      <AppFooter />
    </div>
  );
};