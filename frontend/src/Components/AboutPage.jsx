// src/Components/AboutPage.jsx
import React from 'react';
import { Target, DollarSign, Clock } from 'lucide-react';

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
  },
  header: {
    textAlign: 'center',
    marginBottom: 64,
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
    maxWidth: 600,
    margin: '0 auto',
  },
  section: {
    marginBottom: 48,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 700,
    borderBottom: `2px solid ${C.border}`,
    paddingBottom: 8,
    marginBottom: 24,
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 24,
  },
  featureCard: {
    background: C.white,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: 24,
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  iconWrapper: {
    display: 'inline-flex',
    padding: 16,
    borderRadius: '50%',
    background: C.subtle,
    marginBottom: 16,
    color: C.dark,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 1.5,
  },
};

const AboutPage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>About PriceWise</h1>
        <p style={styles.subtitle}>
          Empowering consumers to save money and time by instantly comparing prices for everyday items.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p>
          PriceWise is a tool designed under the "Technology for Public Goods" theme. Our primary goal is to address the pressing challenge of the rising cost of living by increasing financial accessibility, especially for students and low-income households. We provide a single, reliable platform to instantly compare prices for everyday items across major online retailers and local stores.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <Target size={32} strokeWidth={1.5} />
            </div>
            <h3 style={styles.featureTitle}>Simple Search</h3>
            <p style={styles.featureText}>
              Just type in the product you're looking for. We handle the complexity of searching multiple stores for you.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <DollarSign size={32} strokeWidth={1.5} />
            </div>
            <h3 style={styles.featureTitle}>True Cost Comparison</h3>
            <p style={styles.featureText}>
              We show you the total cost, including item price and shipping, so you can make genuinely informed decisions.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <h3 style={styles.featureTitle}>Save Time & Money</h3>
            <p style={styles.featureText}>
              Stop overpaying and wasting time browsing. We instantly find the best price for any product you need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
