
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import WalletPage from './pages/WalletPage';
import RechargePage from './pages/RechargePage';
import BankingPage from './pages/BankingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
      