import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '../Data/mockProducts'; // Import mock data and we wont need this when the backend is ready

// Component for a single product result card
const ProductResultCard = ({ product }) => (
  <div className="result-card" style={{ border: '1px solid #ddd', padding: '15px', margin: '10px', width: '45%' }}>
    <h4>{product.store}</h4>
    <p>Price: ${product.price.toFixed(2)}</p>
    <p>Shipping: ${product.shipping.toFixed(2)}</p>
    <p>Total Cost: **${(product.price + product.shipping).toFixed(2)}**</p>
    <a href={product.link} target="_blank" rel="noopener noreferrer">
      <button>Link Button</button>
    </a>
  </div>
);

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || 'Product';
  
  // State for sorting and filtering
  const [sortBy, setSortBy] = useState('total_cost_asc'); // Default sort
  const [filterLowest, setFilterLowest] = useState(false);
  const [filterInStore, setFilterInStore] = useState(false);
  const [filterOnline, setFilterOnline] = useState(false);

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    let results = mockProducts; // Use the mock data for the prototype
    
    // NOTE: For a real app, you would fetch data here and store it in state
    
    // Apply filters
    if (filterInStore) {
      results = results.filter(p => p.inStore);
    }
    if (filterOnline) {
      results = results.filter(p => p.online);
    }
    
    // 'Lowest' filter is usually applied *after* other filters
    if (filterLowest) {
        // Find the minimum total cost
        const minCost = results.reduce((min, p) => 
            Math.min(min, p.price + p.shipping), Infinity);
        
        // Filter to only include items at that minimum total cost
        results = results.filter(p => (p.price + p.shipping) === minCost);
    }

    return results;
  }, [filterLowest, filterInStore, filterOnline]);

  // --- Sorting Logic ---
  const sortedAndFilteredProducts = useMemo(() => {
    // Create a mutable copy to sort
    const sorted = [...filteredProducts]; 
    
    sorted.sort((a, b) => {
      const totalA = a.price + a.shipping;
      const totalB = b.price + b.shipping;
      
      if (sortBy === 'total_cost_asc') {
        return totalA - totalB; // Sort by Total Cost - Shipping (Ascending)
      } else if (sortBy === 'total_cost_desc') {
        return totalB - totalA; // Sort by Total Cost + Shipping (Descending) - Though wireframe only shows asc/desc of *Total Cost*
      }
      return 0;
    });

    return sorted;
  }, [filteredProducts, sortBy]);


  // Helper function to handle radio button behavior for sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  }

  return (
    <div className="results-page">
      {/* <Header /> */}
      <main className="content-area" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        
        <aside className="filter-sidebar" style={{ width: '250px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <h3>Filter By</h3>
          {/* NOTE: Checkbox logic for multiple filters active */}
          <label>
            <input type="checkbox" checked={filterLowest} onChange={() => setFilterLowest(!filterLowest)} />
            Lowest Price Only
          </label><br />
          <label>
            <input type="checkbox" checked={filterInStore} onChange={() => setFilterInStore(!filterInStore)} />
            In Store Only
          </label><br />
          <label>
            <input type="checkbox" checked={filterOnline} onChange={() => setFilterOnline(!filterOnline)} />
            Online Only
          </label>
        </aside>

        <section className="results-section" style={{ flexGrow: 1 }}>
          <div className="search-info" style={{ marginBottom: '20px' }}>
            <h2>Result For: **{query}**</h2>
            <button style={{ padding: '5px 10px' }}>Refine Search Button</button>
          </div>

          <div className="sort-controls" style={{ marginBottom: '20px' }}>
            <strong>Sort By:</strong>
            <label style={{ marginLeft: '15px' }}>
              <input 
                type="radio" 
                value="total_cost_asc" 
                checked={sortBy === 'total_cost_asc'} 
                onChange={handleSortChange} 
              />
              Total Cost + Shipping (Lowest First)
            </label>
            <label style={{ marginLeft: '15px' }}>
              <input 
                type="radio" 
                value="total_cost_desc" 
                checked={sortBy === 'total_cost_desc'} 
                onChange={handleSortChange} 
              />
              Total Cost + Shipping (Highest First)
            </label>
          </div>
          
          <h3>Results Found ({sortedAndFilteredProducts.length})</h3>
          
          <div className="results-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedAndFilteredProducts.map((product) => (
              <ProductResultCard key={product.id} product={product} />
            ))}
          </div>
          
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ResultsPage;