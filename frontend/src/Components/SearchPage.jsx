import React, { useState, useEffect } from 'react';
// Assuming you have Header and Footer components
// import Header from './Header';
// import Footer from './Footer';
// Use react-router-dom's useNavigate for navigation
import { useNavigate } from 'react-router-dom';
// Import Lucide icons for the feature cards
import { Target, DollarSign, Clock } from 'lucide-react'; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (searchTerm.length < 1) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/autocomplete/?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (err) {
        console.error("Autocomplete error:", err);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);


  // figma design colors
  const color = {
    dark: "#2f2f2f",
    light: "#e3e3e3",
    light2: "#efefef",
    border: "#cfcfcf",
    ink: "#111111",
    white: "#ffffff",
    subtle: "#f7f7f7", 
  };

  // --- STYLES FOR SCROLL FIX AND LAYOUT ---
  const page = {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',
    color: color.ink,
    background: color.white,
    height: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // CRITICAL: Prevent scrolling on the entire page
    width: "100vw", // Full viewport width
    maxHeight: "100vh",
    position: 'relative', 
  };

  const container = {
    width: "100%",
    // CRITICAL: allows the container to take up all available vertical space
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden", // Ensure no scrolling within the main content area
    padding: "16px",
    paddingTop: '32px',
    // Removed maxHeight calculation. Rely on flex: 1 and hidden overflow to constrain height.
  };
  
  // NOTE: The fixedFooterStyle definition is removed as the component is no longer needed.
  // ----------------------------------------

  const hero = (mounted) => ({
    fontWeight: 800,
    lineHeight: 1.06,
    fontSize: 48,
    margin: "0 0 8px 0",
    opacity: mounted ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  });

  const searchRow = (focused) => ({
    position: "relative",
    overflow: "visible",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: color.white,
    border: `2px solid transparent`,
    backgroundImage: `linear-gradient(white, white), linear-gradient(90deg, #ff8a00, #e52e71)`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    borderRadius: 8,
    padding: 12,
    margin: "8px 0 12px",
    transition: "all 0.3s ease-in-out",
    boxShadow: focused
      ? "0 6px 20px rgba(229, 46, 113, 0.2)"
      : "0 4px 12px rgba(0,0,0,0.08)",
    width: '90%', 
    maxWidth: 700, 
  });

  const input = {
    flex: 1,
    background: "transparent",
    border: 0,
    outline: "none",
    padding: "12px 14px",
    fontSize: 16,
    borderRadius: 6,
    color: color.ink,
  };

  const searchBtn = (hovered) => ({
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: color.white,
    border: 0,
    padding: "12px 24px",
    borderRadius: 6,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: hovered
      ? "0 4px 15px rgba(255, 80, 120, 0.4)"
      : "0 2px 8px rgba(0,0,0,0.1)",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    flexShrink: 0,
  });


  const tagline = (mounted) => ({
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "6px 0 24px",
    opacity: mounted ? 1 : 0,
    transition: "opacity 1s ease-in-out 0.2s",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  });


  // Styles for the embedded "How It Works" feature grid
  const featureGrid = {
    width: "100%",
    maxWidth: 960,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    padding: '0 16px',
    marginBottom: 16,
  };

  const featureCard = {
    background: color.white,
    border: `1px solid ${color.border}`,
    borderRadius: 8,
    padding: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: "transform 0.3s",
    minHeight: 180,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const iconWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: '0 auto 10px',
    borderRadius: '50%',
    background: color.subtle,
    color: '#ff8a00', 
  };

  const featureTitle = {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 6,
    color: color.ink,
  };

  const featureText = {
    fontSize: 13,
    color: "#666",
    lineHeight: 1.4,
  };


  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (q) navigate(`/results?q=${encodeURIComponent(q)}`);
  };

  return (
    <div style={page}>
      <main style={container}>
        <h1 style={hero(isMounted)}>
          Compare Prices.
          <br />
          Save More.
        </h1>

        {/* Long Search Bar */}
        <form onSubmit={handleSearch} role="search" aria-label="Product search" style={searchRow(isInputFocused)}>
          <input
            type="text"
            placeholder="Search Bar"
            value={searchTerm}
            style={input}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => {
              setIsInputFocused(true);
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
              setTimeout(() => setShowSuggestions(false), 150);
            }}
          />
          <button
            type="submit"
            style={searchBtn(isButtonHovered)}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Search
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                background: color.white,
                border: `1px solid ${color.border}`,
                borderRadius: 6,
                padding: 0,
                marginTop: 4,
                listStyle: "none",
                maxHeight: 250,
                overflowY: "auto",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                zIndex: 9999,
              }}
            >
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  style={{
                    padding: "12px",
                    cursor: "pointer",
                    borderBottom: `1px solid ${color.border}`,
                  }}
                  onMouseDown={() => {
                    setSearchTerm(s.title);
                    navigate(`/results?q=${encodeURIComponent(s.title)}`);
                    setShowSuggestions(false);
                  }}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </form>

        <p style={tagline(isMounted)}>
          Stop Overpaying. We instantly find the best price per product.
        </p>
        
        {/* Shortened "How It Works" section embedded directly */}
        <div style={featureGrid}>
          <div style={featureCard}>
            <div style={iconWrapper}>
              <Target size={24} strokeWidth={2} />
            </div>
            <h3 style={featureTitle}>Simple Search</h3>
            <p style={featureText}>
              Find products fast. We search multiple stores for you.
            </p>
          </div>
          <div style={featureCard}>
            <div style={iconWrapper}>
              <DollarSign size={24} strokeWidth={2} />
            </div>
            <h3 style={featureTitle}>True Cost</h3>
            <p style={featureText}>
              Compare total costs, including item price and shipping.
            </p>
          </div>
          <div style={featureCard}>
            <div style={iconWrapper}>
              <Clock size={24} strokeWidth={2} />
            </div>
            <h3 style={featureTitle}>Save Time & Money</h3>
            <p style={featureText}>
              Instantly get the best price for any product you need.
            </p>
          </div>
        </div>
        {/* End of embedded features */}

      </main>

      {/* FOOTER: The custom fixed footer component has been removed to resolve the duplicate/top footer issue. */}
      {/* If your surrounding application still displays a footer, it's external to this component. */}
    </div>
  );
}

export default SearchPage;