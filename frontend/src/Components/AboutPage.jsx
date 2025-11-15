// src/Components/AboutPage.jsx
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
  sectionTitle: {
    fontSize: "1.5rem",
    marginTop: "24px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.5",
    maxWidth: "800px",
  },
};

export default function AboutPage() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>About PriceWise</h1>

      <h2 style={styles.sectionTitle}>Mission</h2>
      <p style={styles.text}>
        To improve financial accessibility by instantly finding the best price
        per product to stop overpaying.
      </p>

      <h2 style={styles.sectionTitle}>Data Sources & Process</h2>
      <p style={styles.text}>
        We integrate product and pricing APIs from major online retailers
        (Amazon, Walmart, Best Buy) and web scraping techniques. Results are
        aggregated, normalized, and displayed.
      </p>

      <h2 style={styles.sectionTitle}>Advanced Data Structures</h2>
      <p style={styles.text}>
        For instant search suggestions, we utilize a Trie structure to enable
        fast autocomplete/prefix searching. Queries are cached in our database
        to manage API rate limits and speed up frequent lookups.
      </p>

      <h2 style={styles.sectionTitle}>Team Members</h2>
      <p style={styles.text}>
        Joel Lau Arrieta, Michael Jamero, Javier Rodriguez, and Anthony Youssef
      </p>
    </main>
  );
}