// src/Components/FavoritePage.jsx
import React from "react";

const styles = {
  page: {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',
    padding: "24px 48px",
    flex: 1,
  },
  title: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
};

export default function FavoritePage() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Favorite Items</h1>
      <p>This is where your favorite items will be displayed.</p>
    </main>
  );
}