import React, { useState } from 'react';
// Assuming you have Header and Footer components
// import Header from './Header';
// import Footer from './Footer';
// Use react-router-dom's useNavigate for navigation
import { useNavigate } from 'react-router-dom'; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the ResultsPage, passing the search term as a URL parameter
      navigate(`/results?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="search-page">
      {/* <Header /> */}
      <main className="content-area">
        <h1>Compare Prices. Save More.</h1>
        
        {/* Search Bar section based on wireframe */}
        <form onSubmit={handleSearch} style={{ margin: '40px 0', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search Bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // Placeholder for where the Trie-based autocomplete suggestions would appear
            style={{ padding: '10px', width: '400px', fontSize: '1.2em' }}
          />
          <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none' }}>
            Search Button
          </button>
        </form>

        <div className="product-placeholder" style={{ border: '1px solid #ccc', width: '250px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Product (Placeholder Image)
        </div>
        
        <p>Stop Overpaying. We instantly find the best price per product.</p>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default SearchPage;