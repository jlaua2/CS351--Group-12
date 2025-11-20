import React, { useState, useEffect } from 'react';
// Assuming you have Header and Footer components
// import Header from './Header';
// import Footer from './Footer';
// Use react-router-dom's useNavigate for navigation
import { useNavigate } from 'react-router-dom'; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

// figma design colors
const color = {
  dark: "#2f2f2f",
  light: "#e3e3e3",
  light2: "#efefef",
  border: "#cfcfcf",
  ink: "#111111",
  white: "#ffffff",
};

const page = {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',
    color: color.ink,
    background: color.white,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const container = {
    width: "100%",
    maxWidth: 1080,
    margin: "0 auto",
    padding: "48px 24px 24px",
    flex: 1,
  };

  const hero = (mounted) => ({
    fontWeight: 800,
    lineHeight: 1.06,
    fontSize: 48,
    margin: "0 0 28px 0",
    opacity: mounted ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  });

  const searchRow = (focused) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: color.white,
    // Use a pseudo-gradient border effect
    border: `2px solid transparent`,
    backgroundImage: `linear-gradient(white, white), linear-gradient(90deg, #ff8a00, #e52e71)`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    borderRadius: 8,
    padding: 12,
    margin: "18px 0 32px",
    transition: "all 0.3s ease-in-out",
    boxShadow: focused
      ? "0 6px 20px rgba(229, 46, 113, 0.2)"
      : "0 4px 12px rgba(0,0,0,0.08)",
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
  });

  const productCard = (mounted) => ({
    width: 280,
    background: color.white,
    border: `1px solid ${color.border}`,
    borderRadius: 8,
    padding: 16,
    margin: "12px 0 28px",
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  });

  const cardImagePlaceholder = {
    height: 120,
    background: color.light2,
    borderRadius: 6,
    marginBottom: 12,
  };

  const cardTextPlaceholder = (width) => ({
    height: 16,
    width: width,
    background: color.light,
    borderRadius: 4,
    marginBottom: 8,
  });

  const tagline = (mounted) => ({
    fontSize: "1.2rem",
    fontWeight: 600,
    margin: "6px 0 28px",
    opacity: mounted ? 1 : 0,
    transition: "opacity 1s ease-in-out 0.2s", // Added a 0.2s delay
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (q) navigate(`/results?q=${encodeURIComponent(q)}`);
  };

  return (
    <div style={page}>

      {/* Main content */}
      <main style={container}>
        <h1 style={hero(isMounted)}>
          Compare Prices.
          <br />
          Save More.
        </h1>

        {/* Gray search strip with white input and bordered button */}
        <form onSubmit={handleSearch} role="search" aria-label="Product search" style={searchRow(isInputFocused)}>
          <input
            type="text"
            placeholder="Search Bar"
            value={searchTerm}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={input}
          />
          <button
            type="submit"
            style={searchBtn(isButtonHovered)}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Search
          </button>
        </form>

        {/* Product placeholder block */}
        <div style={productCard(isMounted)}>
          <div style={cardImagePlaceholder} />
          <div>
            <div style={cardTextPlaceholder("80%")} />
            <div style={cardTextPlaceholder("50%")} />
          </div>
        </div>

        <p style={tagline(isMounted)}>
          Stop Overpaying. We instantly find the best price per product.
        </p>
      </main>

    
    </div>
  );
}

export default SearchPage;