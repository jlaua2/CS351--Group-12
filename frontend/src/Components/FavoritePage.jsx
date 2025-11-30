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
  const [pendingRemove, setPendingRemove] = useState(null);

  // Load favorites when the page loads
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const confirmRemove = (id) => {
    setPendingRemove(id);
  };

  const executeRemove = () => {
    removeFavorite(pendingRemove);
    setFavorites(getFavorites());
    setPendingRemove(null);
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
                  height: 260,
                }}
              >
                <div
                  style={{
                    height: 200,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 
                  style={{
                    marginBottom: 8, 
                    fontWeight: 700, 
                    fontSize: 18,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.title}
                </h3>
                <div style={{ lineHeight: 2 }}>
                  <p style={{ margin: 0 }}>Store: {p.store}</p>
                  <p style={{ margin: 0 }}>Price: ${p.price.toFixed(2)}</p>
                  <p style={{ margin: 0 }}>Shipping: ${p.shipping.toFixed(2)}</p>
                  <p style={{ margin: 0 }}>
                    Total:{" "}
                    <strong>${(p.price + p.shipping).toFixed(2)}</strong>
                  </p>
                </div>
              </div>

              <div>
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
                  onClick={() => confirmRemove(p.id)}
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
            </div>
          ))}
        </div>
      )}
      {/* Confirmation */}
      {pendingRemove !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: 10,
              border: `1px solid ${C.border}`,
              width: "90%",
              maxWidth: 360,
              textAlign: "center",
              boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
            }}
          >
            <h3 style={{ marginBottom: 12, fontWeight: 700 }}>
              Remove from Favorites?
            </h3>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setPendingRemove(null)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  border: `1px solid ${C.border}`,
                  background: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              > 
                Cancel
              </button>

              <button
                onClick={executeRemove}
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
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

