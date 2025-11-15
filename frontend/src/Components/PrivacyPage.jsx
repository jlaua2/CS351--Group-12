// src/Components/PrivacyPage.jsx
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
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default function PrivacyPage() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Privacy Policy for PriceWise</h1>
      <p style={styles.text}>
        This Privacy Policy explains how PriceWise ("we," "us," or "our")
        collects, uses, and protects information in connection with the Price
        Comparison App.
      </p>
      
      <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
      <p style={styles.text}>
        We only collect information necessary to provide the core functionality
        of price comparison and service improvement.
      </p>
      
      <h3 style={{ ...styles.sectionTitle, fontSize: "1.2rem" }}>
        A. Information Collected Automatically (Usage Data)
      </h3>
      <ul style={styles.list}>
        <li style={styles.text}>
          <b>Search History:</b> We store your queries to improve search
          performance, filtering, and Trie autocomplete training.
        </li>
        <li style={styles.text}>
          <b>Interaction Data:</b> We log statistics on filter usage (In Store
          Only, Lowest Price), sorting methods, and clicks to external
          retailers.
        </li>
        <li style={styles.text}>
          <b>Technical Information:</b> Standard information like IP address,
          browser type, and device type is logged for security and monitoring
          purposes.
        </li>
      </ul>

      <h2 style={styles.sectionTitle}>
        2. How We Use Your Information
      </h2>
      <p style={styles.text}>
        We use the collected data for the following purposes:
      </p>
      <ul style={styles.list}>
        <li style={styles.text}>
          <b>Service Delivery:</b> To aggregate prices and display search
          results.
        </li>
        <li style={styles.text}>
          <b>Service Improvement:</b> To analyze search patterns to improve the
          accuracy and speed of our advanced data structures (Trie, Caching
          Layer) and optimize API calls.
        </li>
      </ul>

      <h2 style={styles.sectionTitle}>3. Third-Party API Integration and Data Sharing</h2>
      <p style={styles.text}>The core function of PriceWise relies on sending your search query to external service providers.</p>
      <ul style={styles.list}>
        <li style={styles.text}><b>Retailer APIs (Amazon, Walmart, Best Buy, etc.):</b> Your raw search query is sent to these third-party APIs to fetch real-time price data. We do not control how these third parties use the search data they receive.</li>
        <li style={styles.text}><b>Anonymous Search:</b> We do not send your personal account details (email or user ID) to these APIs. All search requests are made anonymously by our backend server.</li>
        <li style={styles.text}><b>External Links:</b> When you click a link to a retailer, you are redirected to their website. We are not responsible for the privacy practices of those sites.</li>
      </ul>

      <h2 style={styles.sectionTitle}>4. Data Storage and Security</h2>
      <p style={styles.text}>We are committed to protecting the limited data we handle:</p>
      <ul style={styles.list}>
        <li style={styles.text}><b>API Keys and Secrets:</b> All sensitive credentials, including third-party API keys, are stored in environment variables during deployment on Render.</li>
        <li style={styles.text}><b>Transmission Security:</b> All data transmission between your browser and our server is encrypted using HTTPS.</li>
      </ul>

      <h2 style={styles.sectionTitle}>5. Changes to This Policy</h2>
      <p style={styles.text}>We reserve the right to update this Privacy Policy. We will notify you of any significant changes by updating the "Last Updated" date at the top of this document.</p>

      <h2 style={styles.sectionTitle}>6. Contact Us</h2>
      <p style={styles.text}>If you have any questions about this policy, please contact us @ jlaua2@uic.edu, mjame5@uic.edu, ayous11@uic.edu and jrodr300@uic.edu.</p>
    </main>
  );
}