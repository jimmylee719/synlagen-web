import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Privacy, Terms, DataProtection } from './pages/Legal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // 清除網址參數，回歸標準 URL 結構
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('product')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // 統一導航處理
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'data-protection':
        return <DataProtection />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App font-sans">
      <Layout activePage={currentPage} onNavigate={handleNavigate}>
        {renderContent()}
      </Layout>
    </div>
  );
};

export default App;