// src/Components/ResultsPage.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ImageIcon, Store } from "lucide-react";

// REMOVED mockProducts import, as it's no longer needed.

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
  sidebarTitle: { fontSize: 18, fontWeight: 700, margin: "8px 0 18px" },
  filterRow: (hovered) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
    padding: "8px",
    borderRadius: 6,
    background: hovered ? C.subtle : "transparent",
    transition: "background 0.2s ease-in-out",
    cursor: "pointer",
  }),
  dot: (checked) => ({
    width: 24,
    height: 24,
    borderRadius: 999,
    background: checked ? "linear-gradient(90deg, #ff8a00, #e52e71)" : C.mid,
    border: checked ? 0 : `1px solid ${C.border}`,
    cursor: "pointer",
  }),
  sq: (checked) => ({
    width: 24,
    height: 24,
    borderRadius: 4,
    background: checked ? "linear-gradient(90deg, #ff8a00, #e52e71)" : C.mid,
    border: checked ? 0 : `1px solid ${C.border}`,
    cursor: "pointer",
  }),

  resultsWrap: { flex: 1 },
  topRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 20,
    alignItems: "start",
  },
  titleLine: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" },
  title: { fontSize: 22, fontWeight: 800 },
  refineBtn: (hovered) => ({
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: C.white,
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
  }),
  productPic: {
    width: 360,
    height: 180,
    background: C.subtle,
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    display: "grid",
    placeItems: "center",
    fontWeight: 600,
    color: C.border,
  },

  sortRow: { marginTop: 18, display: "flex", alignItems: "center", gap: 26 },
  sortLabel: { fontWeight: 700, fontSize: 18 },
  radioWrap: (hovered) => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px",
    borderRadius: 6,
    background: hovered ? C.subtle : "transparent",
    transition: "background 0.2s ease-in-out",
    cursor: "pointer",
  }),
  radioDot: (checked) => ({
    width: 22,
    height: 22,
    borderRadius: 999,
    border: `2px solid ${checked ? C.black : C.border}`,
    background: checked ? "linear-gradient(90deg, #ff8a00, #e52e71)" : C.white,
  }),
  radioText: { fontSize: 16 },

  divider: { marginTop: 18, height: 1, background: C.border },

  resHeader: {
    textAlign: "center",
    fontWeight: 800,
    margin: "22px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 24,
    alignItems: "stretch",
  },

  card: (hovered) => ({
    background: C.white,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
    transition: "all 0.3s ease-in-out",
    boxShadow: hovered
      ? "0 8px 25px rgba(0,0,0,0.1)"
      : "0 4px 12px rgba(0,0,0,0.08)",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
  }),
  cardContent: {
    display: "flex",
    gap: 18,
    alignItems: "flex-start",
  },
  logoBox: {
    flexShrink: 0,
    width: 54,
    height: 54,
    borderRadius: 8,
    background: C.subtle,
    display: "grid",
    placeItems: "center",
    color: C.mid,
  },
  cardDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: { fontSize: 18, fontWeight: 800, margin: 0, color: C.ink },
  priceRow: { marginTop: 8, color: "#222" },
  totalStrong: { fontWeight: 800 },
  linkBar: {
    marginTop: 12,
    display: "flex",
    justifyContent: "flex-end",
  },
  linkBtn: (hovered) => ({
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: C.white,
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
  }),
};

// Product Card
const ProductResultCard = ({ product }) => {
  const total = product.price + product.shipping;
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isGoToSiteHovered, setIsGoToSiteHovered] = useState(false);

  return (
    <div
      className="result-card"
      style={styles.card(isCardHovered)}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div style={styles.cardContent}>
        <div style={styles.logoBox}>
          <Store size={28} strokeWidth={1.5} />
        </div>
        <div style={styles.cardDetails}>
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
              <button
                style={styles.linkBtn(isGoToSiteHovered)}
                onMouseEnter={() => setIsGoToSiteHovered(true)}
                onMouseLeave={() => setIsGoToSiteHovered(false)}
              >GO TO SITE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "Product";

  // Hover states for filters and sorting
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const [hoveredSort, setHoveredSort] = useState(null);

  // Hover state for Refine Search button
  const [isRefineHovered, setIsRefineHovered] = useState(false);

  // State for backend data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // sorting and filtering state
  const [sortBy, setSortBy] = useState("total_cost_asc");
  const [filterLowest, setFilterLowest] = useState(false);
  const [filterInStore, setFilterInStore] = useState(false);
  const [filterOnline, setFilterOnline] = useState(false);

  // Fetch data from backend API
  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        const res = await fetch(`/api/search/?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setProducts(data.results || []);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  // Filtering
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (filterInStore) list = list.filter((p) => p.inStore);
    if (filterOnline) list = list.filter((p) => p.online);

    if (filterLowest && list.length > 0) {
      const minCost = Math.min(...list.map((p) => p.price + p.shipping));
      list = list.filter((p) => p.price + p.shipping === minCost);
    }

    return list;
  }, [products, filterInStore, filterOnline, filterLowest]);

  // Sorting
  const sortedAndFilteredProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    sorted.sort((a, b) => {
      const A = a.price + a.shipping;
      const B = b.price + b.shipping;
      return sortBy === "total_cost_desc" ? B - A : A - B;
    });
    return sorted;
  }, [filteredProducts, sortBy]);

  const handleSortChange = (value) => setSortBy(value);

  const handleInStoreFilterChange = () => {
    const newInStoreState = !filterInStore;
    setFilterInStore(newInStoreState);
    if (newInStoreState) {
      setFilterOnline(false);
    }
  };

  const handleOnlineFilterChange = () => {
    const newOnlineState = !filterOnline;
    setFilterOnline(newOnlineState);
    if (newOnlineState) {
      setFilterInStore(false);
    }
  };

  return (
    <div className="results-page" style={styles.page}>
      <main className="content-area" style={styles.main}>
        <aside className="filter-sidebar" style={styles.sidebar}>
          <div style={styles.sidebarTitle}>Filter By:</div>

          <label
            style={styles.filterRow(hoveredFilter === "lowest")}
            onMouseEnter={() => setHoveredFilter("lowest")}
            onMouseLeave={() => setHoveredFilter(null)}
          >
            <span style={styles.dot(filterLowest)} />
            <input
              type="checkbox"
              checked={filterLowest}
              onChange={() => setFilterLowest(!filterLowest)}
              style={{ display: "none" }}
            />
            <span>Lowest</span>
          </label>

          <label
            style={styles.filterRow(hoveredFilter === "in-store")}
            onMouseEnter={() => setHoveredFilter("in-store")}
            onMouseLeave={() => setHoveredFilter(null)}
          >
            <span style={styles.sq(filterInStore)} />
            <input
              type="checkbox"
              checked={filterInStore}
              onChange={handleInStoreFilterChange}
              style={{ display: "none" }}
            />
            <span>In Store Only</span>
          </label>

          <label
            style={styles.filterRow(hoveredFilter === "online")}
            onMouseEnter={() => setHoveredFilter("online")}
            onMouseLeave={() => setHoveredFilter(null)}
          >
            <span style={styles.sq(filterOnline)} />
            <input
              type="checkbox"
              checked={filterOnline}
              onChange={handleOnlineFilterChange}
              style={{ display: "none" }}
            />
            <span>Online Only</span>
          </label>
        </aside>

        <section className="results-section" style={styles.resultsWrap}>
          <div style={styles.topRow}>
            <div>
              <div style={styles.titleLine}>
                <h2 style={styles.title}>Result For: {query}</h2>
                <Link to="/" state={{ query: query }}>
                  <button
                    style={styles.refineBtn(isRefineHovered)}
                    onMouseEnter={() => setIsRefineHovered(true)}
                    onMouseLeave={() => setIsRefineHovered(false)}
                  >Refine Search</button>
                </Link>
              </div>

              <div style={styles.sortRow}>
                <span style={styles.sortLabel}>Sort By:</span>

                <label
                  style={styles.radioWrap(hoveredSort === "asc")}
                  onMouseEnter={() => setHoveredSort("asc")}
                  onMouseLeave={() => setHoveredSort(null)}
                >
                  <span style={styles.radioDot(sortBy === "total_cost_asc")} />
                  <input
                    type="radio"
                    name="sort"
                    value="total_cost_asc"
                    checked={sortBy === "total_cost_asc"}
                    onChange={() => handleSortChange("total_cost_asc")}
                    style={{ display: "none" }}
                  />
                  <span style={styles.radioText}>Total Cost: Low to High</span>
                </label>

                <label
                  style={styles.radioWrap(hoveredSort === "desc")}
                  onMouseEnter={() => setHoveredSort("desc")}
                  onMouseLeave={() => setHoveredSort(null)}
                >
                  <span style={styles.radioDot(sortBy === "total_cost_desc")} />
                  <input
                    type="radio"
                    name="sort"
                    value="total_cost_desc"
                    checked={sortBy === "total_cost_desc"}
                    onChange={() => handleSortChange("total_cost_desc")}
                    style={{ display: "none" }}
                  />
                  <span style={styles.radioText}>Total Cost: High to Low</span>
                </label>
              </div>
            </div>

            <div style={styles.productPic}>
              <ImageIcon size={48} strokeWidth={1.5} />
            </div>
          </div>

          <div style={styles.divider} />

          <h3 style={styles.resHeader}>
            {loading
              ? "Loading..."
              : `Results Found (${sortedAndFilteredProducts.length})`}
          </h3>

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
