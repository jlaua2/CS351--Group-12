// src/Components/ResultsPage.jsx
import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { mockProducts } from "../Data/mockProducts";

// colors
const C = {
  dark: "#2f2f2f",
  ink: "#111111",
  white: "#ffffff",
  mid: "#e3e3e3",
  border: "#cfcfcf",
  subtle: "#efefef",
  black: "#000000",
};

const styles = {
  page: {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',
    color: C.ink,
    background: C.white,
  },
  main: { display: "flex", gap: 20, padding: 24 },
  sidebar: {
    width: 260,
    borderRight: `1px solid ${C.border}`,
    paddingRight: 20,
  },
  sidebarTitle: { fontSize: 20, fontWeight: 700, margin: "8px 0 18px" },
  filterRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  dot: (checked) => ({
    width: 24,
    height: 24,
    borderRadius: 999,
    background: checked ? C.black : C.mid,
    border: `1px solid ${C.border}`,
    cursor: "pointer",
  }),
  sq: (checked) => ({
    width: 24,
    height: 24,
    borderRadius: 4,
    background: checked ? C.black : C.mid,
    border: `1px solid ${C.border}`,
    cursor: "pointer",
  }),

  // Top info row
  resultsWrap: { flex: 1 },
  topRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 20,
    alignItems: "start",
  },
  titleLine: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" },
  title: { fontSize: 22, fontWeight: 800 },
  refineBtn: {
    background: C.mid,
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    padding: "8px 12px",
    cursor: "pointer",
  },
  productPic: {
    width: 360,
    height: 180,
    background: C.mid,
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    display: "grid",
    placeItems: "center",
    fontWeight: 600,
    color: "#333",
  },

  // Sort row
  sortRow: { marginTop: 18, display: "flex", alignItems: "center", gap: 26 },
  sortLabel: { fontWeight: 700, fontSize: 18 },
  radioWrap: { display: "flex", alignItems: "center", gap: 10 },
  radioDot: (checked) => ({
    width: 22,
    height: 22,
    borderRadius: 999,
    border: `2px solid ${C.black}`,
    background: checked ? C.black : C.white,
  }),
  radioText: { fontSize: 16 },

  divider: { marginTop: 18, height: 1, background: C.border },

  // Results header
  resHeader: {
    textAlign: "center",
    fontWeight: 800,
    margin: "22px 0",
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 24,
    alignItems: "stretch",
  },

  // Card
  card: {
    background: C.mid,
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    padding: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
  },
  cardTitle: { fontSize: 18, fontWeight: 800, margin: 0, color: C.ink },
  priceRow: { marginTop: 8, color: "#222" },
  totalStrong: { fontWeight: 800 },
  linkBar: {
    marginTop: 12,
    display: "flex",
    justifyContent: "flex-end",
  },
  linkBtn: {
    background: C.black,
    color: C.white,
    border: 0,
    padding: "10px 14px",
    borderRadius: 4,
    cursor: "pointer",
  },
};

// Single product card
const ProductResultCard = ({ product }) => {
  const total = product.price + product.shipping;
  return (
    <div className="result-card" style={styles.card}>
      <div>
        <h4 style={styles.cardTitle}>{product.store}</h4>
        <div style={styles.priceRow}>Price: ${product.price.toFixed(2)}</div>
        <div style={styles.priceRow}>Shipping: ${product.shipping.toFixed(2)}</div>
        <div style={styles.priceRow}>
          Total Cost: <span style={styles.totalStrong}>${total.toFixed(2)}</span>
        </div>
      </div>
      <div style={styles.linkBar}>
        <a href={product.link} target="_blank" rel="noopener noreferrer">
          <button style={styles.linkBtn}>Link Button</button>
        </a>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Product";

  // sorting and filtering state
  const [sortBy, setSortBy] = useState("total_cost_asc");
  const [filterLowest, setFilterLowest] = useState(false);
  const [filterInStore, setFilterInStore] = useState(false);
  const [filterOnline, setFilterOnline] = useState(false);

  // Filtering
  const filteredProducts = useMemo(() => {
    let results = mockProducts;

    if (filterInStore) results = results.filter((p) => p.inStore);
    if (filterOnline) results = results.filter((p) => p.online);

    if (filterLowest) {
      const minCost = results.reduce(
        (min, p) => Math.min(min, p.price + p.shipping),
        Infinity
      );
      results = results.filter((p) => p.price + p.shipping === minCost);
    }

    return results;
  }, [filterLowest, filterInStore, filterOnline]);

  // Sorting
  const sortedAndFilteredProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    sorted.sort((a, b) => {
      const ta = a.price + a.shipping;
      const tb = b.price + b.shipping;
      return sortBy === "total_cost_desc" ? tb - ta : ta - tb;
    });
    return sorted;
  }, [filteredProducts, sortBy]);

  const handleSortChange = (value) => setSortBy(value);

  return (
    <div className="results-page" style={styles.page}>
      <main className="content-area" style={styles.main}>
        {/* Sidebar filters */}
        <aside className="filter-sidebar" style={styles.sidebar}>
          <div style={styles.sidebarTitle}>Filter By:</div>

          <label style={styles.filterRow}>
            <span style={styles.dot(filterLowest)} />
            <input
              type="checkbox"
              checked={filterLowest}
              onChange={() => setFilterLowest(!filterLowest)}
              style={{ display: "none" }}
            />
            <span>Lowest</span>
          </label>

          <label style={styles.filterRow}>
            <span style={styles.sq(filterInStore)} />
            <input
              type="checkbox"
              checked={filterInStore}
              onChange={() => setFilterInStore(!filterInStore)}
              style={{ display: "none" }}
            />
            <span>In Store Only</span>
          </label>

          <label style={styles.filterRow}>
            <span style={styles.sq(filterOnline)} />
            <input
              type="checkbox"
              checked={filterOnline}
              onChange={() => setFilterOnline(!filterOnline)}
              style={{ display: "none" }}
            />
            <span>Online Only</span>
          </label>
        </aside>

        {/* Main results column */}
        <section className="results-section" style={styles.resultsWrap}>
          {/* Top info row */}
          <div style={styles.topRow}>
            <div>
              <div style={styles.titleLine}>
                <h2 style={styles.title}>Result For: {query}</h2>
                <button style={styles.refineBtn}>Refine Search Button</button>
              </div>

              {/* Sort row */}
              <div style={styles.sortRow}>
                <span style={styles.sortLabel}>Sort By:</span>

                <label style={styles.radioWrap}>
                  <span style={styles.radioDot(sortBy === "total_cost_asc")} />
                  <input
                    type="radio"
                    name="sort"
                    value="total_cost_asc"
                    checked={sortBy === "total_cost_asc"}
                    onChange={() => handleSortChange("total_cost_asc")}
                    style={{ display: "none" }}
                  />
                  <span style={styles.radioText}>Total Cost - Shipping</span>
                </label>

                <label style={styles.radioWrap}>
                  <span style={styles.radioDot(sortBy === "total_cost_desc")} />
                  <input
                    type="radio"
                    name="sort"
                    value="total_cost_desc"
                    checked={sortBy === "total_cost_desc"}
                    onChange={() => handleSortChange("total_cost_desc")}
                    style={{ display: "none" }}
                  />
                  <span style={styles.radioText}>Total Cost + Shipping</span>
                </label>
              </div>
            </div>

            <div style={styles.productPic}>Product Picture</div>
          </div>

          <div style={styles.divider} />

          {/* Results header */}
          <h3 style={styles.resHeader}>
            Results Found (Updated 5 minutes ago)
          </h3>

          {/* Grid of results */}
          <div className="results-list" style={styles.grid}>
            {sortedAndFilteredProducts.map((p) => (
              <ProductResultCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
