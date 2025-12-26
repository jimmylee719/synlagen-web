import React, { useState } from 'react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: '首頁 Home', path: 'home' },
  { label: '關於我們 About', path: 'about' },
  { label: '服務項目 Services', path: 'services' },
  { label: '產品介紹 Products', path: 'products' },
  { label: '聯絡我們 Contact', path: 'contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo - Text Only Version */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-3xl font-bold tracking-widest text-slate-900 font-logo leading-none group-hover:text-brand-700 transition-colors">
                  SYNLAGEN
                </span>
                <span className="text-[0.65rem] md:text-xs text-slate-500 font-medium tracking-wide mt-1 group-hover:text-brand-600 transition-colors">
                  蔘樂見有限公司
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                    activePage === item.path 
                      ? 'text-brand-700 bg-brand-50' 
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    activePage === item.path
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                 {/* Footer Logo - Text Only */}
                 <span className="text-white text-2xl font-bold tracking-widest font-logo">SYNLAGEN</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                以尖端生物科技賦能人類健康。我們致力於開發便捷、高效的西洋蔘與人蔘皂甙保健食品，為亞洲快節奏的生活方式提供精準營養補給。
              </p>
            </div>
            
            {/* Explore Links */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">探索 Explore</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">關於我們 About</button></li>
                <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">產品介紹 Products</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">服務項目 Services</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">聯絡我們 Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-slate-500 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <span>&copy; {new Date().getFullYear()} SYNLAGEN (蔘樂見有限公司) All rights reserved.</span>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-l-0 md:border-l border-slate-800 px-0 md:px-6 mx-0 md:mx-2">
                <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition-colors">隱私權政策 Privacy Policy</button>
                <button onClick={() => onNavigate('terms')} className="hover:text-slate-300 transition-colors">使用條款 Terms of Use</button>
                <button onClick={() => onNavigate('data-protection')} className="hover:text-slate-300 transition-colors">個資保護聲明 Data Protection</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};