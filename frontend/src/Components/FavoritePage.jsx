import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../utils/favorites";

const C = {
  border: "#cfcfcf",
  ink: "#111111",
  subtle: "#f7f7f7",
  accent: "linear-gradient(90deg, #ff8a00, #e52e71)",
};

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites when the page loads
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  return (
    <div
      style={{
        padding: "48px 24px",
        maxWidth: 960,
        margin: "0 auto",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Inter, sans-serif',
        color: C.ink,
      }}
    >
      <h1
        style={{
          fontSize: 42,
          fontWeight: 800,
          marginBottom: 24,
          background: C.accent,
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
        }}
      >
        Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p
          style={{
            fontSize: 18,
            textAlign: "center",
            marginTop: 20,
            color: "#555",
          }}
        >
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {favorites.map((p) => (
            <div
              key={p.id}
              style={{
                padding: 16,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                background: "white",
              }}
            >
              <h3 style={{ marginBottom: 8, fontWeight: 700 }}>{p.title}</h3>
              <p>Store: {p.store}</p>
              <p>Price: ${p.price.toFixed(2)}</p>
              <p>Shipping: ${p.shipping.toFixed(2)}</p>
              <p>
                Total:{" "}
                <strong>${(p.price + p.shipping).toFixed(2)}</strong>
              </p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                <button
                  style={{
                    padding: "8px 14px",
                    borderRadius: 6,
                    border: "none",
                    background: C.accent,
                    color: "white",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Go To Site
                </button>
              </a>

              <button
                onClick={() => handleRemove(p.id)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: `1px solid ${C.border}`,
                  background: "white",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

