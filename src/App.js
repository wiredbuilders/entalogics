import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import CaseStudyEcommerce from './pages/CaseStudyEcommerce';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services/:serviceSlug" element={<ServicePage />} />
            <Route path="case-studies/ecommerce-redesign" element={<CaseStudyEcommerce />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 