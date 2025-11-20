// src/Components/FavoritePage.jsx
import React from 'react';
import { Heart } from 'lucide-react';

// Color palette consistent with other pages
const C = {
  dark: "#2f2f2f",
  ink: "#111111",
  white: "#ffffff",
  border: "#cfcfcf",
  subtle: "#f7f7f7",
  accent: "linear-gradient(90deg, #ff8a00, #e52e71)",
};

const styles = {
  page: {
    padding: '48px 24px',
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Inter, sans-serif',
    color: C.ink,
    lineHeight: 1.6,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    display: 'inline-flex',
    padding: 24,
    borderRadius: '50%',
    background: C.subtle,
    marginBottom: 24,
    color: C.dark,
  },
  title: {
    fontSize: 42,
    fontWeight: 800,
    marginBottom: 12,
    background: C.accent,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    maxWidth: 500,
    margin: '0 auto',
  },
};

const FavoritePage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.iconWrapper}>
        <Heart size={48} strokeWidth={1.5} />
      </div>
      <h1 style={styles.title}>Your Favorites</h1>
      <p style={styles.subtitle}>
        This is where your saved items will appear. Add products to your favorites to track their prices over time.
      </p>
      {/* 
        Once the backend is connected, you would map over favorite items here.
        For now, we can show a placeholder message.
      */}
      <p style={{ marginTop: '32px', color: '#777' }}>
        You haven't added any favorites yet.
      </p>
    </div>
  );
};

export default FavoritePage;
