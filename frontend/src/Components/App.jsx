import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchPage from "./Components/SearchPage";
import ResultsPage from "./Components/ResultsPage";
import AboutPage from "./Components/AboutPage";
import FavoritePage from "./Components/FavoritePage";
import PrivacyPage from "./Components/PrivacyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* HOME SEARCH PAGE */}
        <Route path="/" element={<SearchPage />} />

        {/* RESULTS PAGE */}
        <Route path="/results" element={<ResultsPage />} />

        {/* STATIC PAGES */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* CATCH ALL (OPTIONAL) */}
        <Route path="*" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}
