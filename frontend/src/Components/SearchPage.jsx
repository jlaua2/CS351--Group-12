import React, { useState } from 'react';
// Assuming you have Header and Footer components
// import Header from './Header';
// import Footer from './Footer';
// Use react-router-dom's useNavigate for navigation
import { useNavigate } from 'react-router-dom'; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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

  const bar = {
    background: color.dark,
    color: "#fff",
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
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    border: 0,
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer",
  };

  const container = {
    width: "100%",
    maxWidth: 1080,
    margin: "0 auto",
    padding: "48px 24px 24px",
    flex: 1,
  };

  const hero = {
    fontWeight: 800,
    lineHeight: 1.06,
    fontSize: 48,
    margin: "0 0 28px 0",
  };

  const searchRow = {
    // The gray strip in the wireframe
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: color.light,
    border: `1px solid ${color.light}`,
    borderRadius: 8,
    padding: 12,
    margin: "18px 0 32px",
  };

  const input = {
    flex: 1,
    background: color.white,
    border: 0,
    outline: "none",
    padding: "12px 14px",
    fontSize: 16,
    borderRadius: 6,
  };

  const searchBtn = {
    background: color.white,
    color: "#000",
    border: "1px solid #000",
    padding: "10px 14px",
    borderRadius: 6,
    fontWeight: 500,
    cursor: "pointer",
  };

  const productCard = {
    width: 280,
    height: 150,
    background: color.light,
    border: `1px solid ${color.border}`,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 16,
    margin: "12px 0 28px",
  };

  const circleThumb = {
    width: 58,
    height: 58,
    borderRadius: 999,
    background: color.white,
    border: `1px solid ${color.border}`,
  };

  const tagline = { color: "#1a1a1a", fontSize: 14, margin: "6px 0 0" };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (q) navigate(`/results?q=${encodeURIComponent(q)}`);
  };

  return (
    <div style={page}>

      {/* Main content */}
      <main style={container}>
        <h1 style={hero}>
          Compare Prices.
          <br />
          Save More.
        </h1>

        {/* Gray search strip with white input and bordered button */}
        <form onSubmit={handleSearch} role="search" aria-label="Product search" style={searchRow}>
          <input
            type="text"
            placeholder="Search Bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={input}
          />
          <button type="submit" style={searchBtn}>
            Search Button
          </button>
        </form>

        {/* Product placeholder block */}
        <div style={productCard}>
          <div style={circleThumb} />
          <span>Product</span>
        </div>

        <p style={tagline}>
          Stop Overpaying. We instantly find the best price per product.
        </p>
      </main>

    
    </div>
  );
}

export default SearchPage;