import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProducts } from '../services/productService';

interface ProductsProps {
    onNavigate: (page: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(getProducts());
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (product: Product) => {
      setSelectedProduct(product);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquiry = () => {
      onNavigate('contact');
  };

  // 預留外部連結點擊處理，未來提供 URL 後可直接更換
  const handleExternalLandingClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      // 等待您提供外部 URL 後更換為：window.open("YOUR_URL_HERE", "_blank");
      alert("外部一頁式詳細介紹準備中，敬請期待！");
  };

  // --- 產品單項詳細頁面 ---
  if (selectedProduct) {
      return (
        <div className="bg-white min-h-screen py-20 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button 
                    onClick={handleBack}
                    className="flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    返回產品列表 Back to Products
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                        <img 
                            src={selectedProduct.imageUrl} 
                            alt={selectedProduct.name} 
                            className="w-full h-auto object-cover aspect-square"
                        />
                    </div>

                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-bold uppercase tracking-wide mb-4 border border-brand-100">
                            {selectedProduct.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {selectedProduct.name}
                        </h1>
                        
                        <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-8">
                            <p>{selectedProduct.description}</p>
                        </div>

                        {/* 特殊行銷按鈕：潤氣 BR.EVE 專屬 (樣式同 Services CTA) */}
                        {selectedProduct.slug === 'br-eve' && (
                            <div className="mb-10 p-6 bg-brand-50 border border-brand-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="text-center sm:text-left">
                                    <h4 className="font-bold text-brand-900 text-lg">體驗沉浸式產品故事</h4>
                                    <p className="text-sm text-brand-700">了解科學數據與完整的潤氣解決方案</p>
                                </div>
                                <button 
                                    onClick={handleExternalLandingClick}
                                    className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-500/30 whitespace-nowrap transform hover:scale-105"
                                >
                                    產品詳細介紹
                                </button>
                            </div>
                        )}

                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-6 mb-10">
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">主要成分 Ingredients</h3>
                                <p className="text-slate-700">{selectedProduct.ingredients}</p>
                            </div>
                            <div className="border-t border-slate-200 pt-4">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">產品規格 Specification</h3>
                                <p className="text-slate-700 font-medium">{selectedProduct.specs}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={handleInquiry}
                                className="flex-1 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl shadow-lg transition-all flex items-center justify-center"
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                立即詢價 Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">產品系列 Our Products</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            探索我們為全球市場精心研發的機能性食品，滿足各種健康需求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
                key={product.id} 
                onClick={() => handleProductClick(product)}
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative bg-slate-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-800 uppercase tracking-wide shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{product.name}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                  {product.description}
                </p>
                
                <div className="pt-6 border-t border-slate-50 mt-auto flex flex-col gap-3">
                   <button 
                      onClick={(e) => { e.stopPropagation(); handleProductClick(product); }}
                      className="w-full py-2 bg-slate-50 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-100 transition-colors"
                   >
                      查看規格詳情
                   </button>
                   {/* 潤氣產品特有的綠色 CTA 按鈕 */}
                   {product.slug === 'br-eve' && (
                     <button 
                        onClick={handleExternalLandingClick}
                        className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-brand-500/30 transform hover:scale-[1.02]"
                     >
                        產品詳細介紹
                     </button>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};