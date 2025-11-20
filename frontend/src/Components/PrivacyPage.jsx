// src/Components/PrivacyPage.jsx
import React from 'react';

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
    lineHeight: 1.7,
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
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    borderBottom: `2px solid ${C.border}`,
    paddingBottom: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingLeft: 20,
  },
  lastUpdated: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
    marginTop: 48,
  }
};

const PrivacyPage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>
          Your privacy is important to us. This policy explains what data we collect, why we collect it, and how we protect it.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <p style={styles.text}>
          To provide our core service, we collect a minimal amount of information:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Search Queries:</strong> We collect the product search terms you enter. This data is used to improve our search algorithm and understand product trends. It is always anonymized and aggregated, and never linked to an individual user.
          </li>
          <li>
            <strong>Technical Information:</strong> We may collect non-personal technical information, such as browser type and operating system, to ensure our site functions correctly across all platforms.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p style={styles.text}>
          The information we collect is used solely for the following purposes:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>To Provide and Improve Our Services:</strong> Your search queries help us fetch relevant price comparisons and refine the accuracy of our results over time.
          </li>
          <li>
            <strong>For Analytics:</strong> We analyze aggregated, anonymous data to understand how our service is used, which helps us make informed decisions about new features and improvements.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Data Sharing and Security</h2>
        <p style={styles.text}>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Since we do not currently have user accounts, we do not store any personal data like names or email addresses. All data we handle is for operational purposes and is treated with strict confidentiality.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>4. Changes to This Policy</h2>
        <p style={styles.text}>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
