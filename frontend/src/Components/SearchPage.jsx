import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, DollarSign, Clock } from 'lucide-react'; 

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
  subtle: "#f7f7f7",
};

const page = {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',
    color: color.ink,
    background: color.white,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
  };

  const container = {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    padding: "16px",
  };

  const contentWrapper = {
    width: "100%",
    maxWidth: 1080,
    display: "flex",
    flexDirection: "column",
    gap: 24,
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
    margin: "6px 0 12px",
    opacity: mounted ? 1 : 0,
    transition: "opacity 1s ease-in-out 0.2s",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  });

  const aboutSection = {
    marginTop: 12,
    paddingTop: 12,
    borderTop: `1px solid ${color.border}`,
  };

  const aboutTitle = {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    color: color.ink,
  };

  const featureGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 12,
    marginTop: 12,
  };

  const featureCard = {
    background: color.white,
    border: `1px solid ${color.border}`,
    borderRadius: 6,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    textAlign: "center",
    fontSize: 13,
  };

  const iconWrapper = {
    display: "inline-flex",
    padding: 8,
    borderRadius: "50%",
    background: color.subtle,
    marginBottom: 6,
    color: color.dark,
  };

  const featureTitle = {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
    color: color.ink,
  };

  const featureText = {
    fontSize: 12,
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
        <div style={contentWrapper}>
          <h1 style={hero(isMounted)}>
            Compare Prices.
            <br />
            Save More.
          </h1>

          {/* Search form */}
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
              Compare
            </button>
          </form>

          <p style={tagline(isMounted)}>
            Stop Overpaying. We instantly find the best price per product.
          </p>

          {/* About Section */}
          <section style={aboutSection}>
            <h2 style={aboutTitle}>How It Works</h2>
            <div style={featureGrid}>
              <div style={featureCard}>
                <div style={iconWrapper}>
                  <Target size={20} strokeWidth={1.5} />
                </div>
                <h4 style={featureTitle}>Simple Search</h4>
                <p style={featureText}>
                  Type the product. We search multiple stores for you.
                </p>
              </div>
              <div style={featureCard}>
                <div style={iconWrapper}>
                  <DollarSign size={20} strokeWidth={1.5} />
                </div>
                <h4 style={featureTitle}>True Cost</h4>
                <p style={featureText}>
                  Price + shipping = real total. Informed decisions.
                </p>
              </div>
              <div style={featureCard}>
                <div style={iconWrapper}>
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <h4 style={featureTitle}>Save Time</h4>
                <p style={featureText}>
                  Instantly find the best price for any product.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;