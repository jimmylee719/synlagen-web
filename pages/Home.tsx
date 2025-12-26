import React, { useEffect, useState } from 'react';
import { Service, Product } from '../types';
import { getProducts } from '../services/productService';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const services: Service[] = [
  {
    title: "全球供應鏈管理 Global Supply Chain",
    description: "嚴選北美威斯康辛州頂級西洋蔘原料，建立全程可追溯的品質控管體系。",
    icon: "🌏"
  },
  {
    title: "尖端皂甙應用 Advanced Application",
    description: "採用專利製程技術，最大化保留西洋蔘中珍貴人蔘皂甙(Ginsenosides)。",
    icon: "⚗️"
  },
  {
    title: "永續環境承諾 Sustainability",
    description: "我們致力於減少包裝塑料使用，並支持環境友善農法，讓每一份健康都來自於對地球的尊重。",
    icon: "🌱"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Get first 3 products for display
    setFeaturedProducts(getProducts().slice(0, 3));
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Fixed background visibility */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center py-24 bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000" 
            alt="American Ginseng Farm & Garden" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Enhanced Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/50 text-white text-sm font-semibold mb-6 backdrop-blur-sm tracking-wide">
              Global Leader in Ginsenoside Science
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              源自天然西洋蔘 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">開啟健康防護力</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md font-medium">
              SYNLAGEN (蔘樂見有限公司) 專注於高純度西洋蔘與人蔘皂甙的研發與應用。我們結合傳統草本智慧與現代生物科技，並致力於環境永續，為全球消費者打造高效、溫和且對地球友善的營養補給方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center"
              >
                瀏覽產品 Our Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-lg transition-all flex items-center justify-center shadow-lg"
              >
                永續願景 Our Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300 group cursor-default">
                <div className="text-4xl mr-5 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">精選產品 Featured Innovation</h2>
                  <p className="text-slate-500">結合便利性與人蔘皂甙精華的機能食品系列</p>
               </div>
               <button 
                  onClick={() => onNavigate('products')} 
                  className="hidden md:flex items-center text-brand-700 font-semibold hover:text-brand-800 transition-colors"
               >
                  查看全部 View All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {featuredProducts.length > 0 ? featuredProducts.map((product) => (
                  <div key={product.id} onClick={() => onNavigate('products')} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-slate-100 flex flex-col h-full">
                     <div className="h-48 overflow-hidden relative">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-xs font-medium">了解更多 &rarr;</span>
                        </div>
                     </div>
                     <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-bold text-brand-600 uppercase mb-2 tracking-wide">{product.category}</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{product.name}</h3>
                        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed flex-grow">{product.description}</p>
                     </div>
                  </div>
               )) : (
                  <div className="col-span-3 text-center py-10 text-slate-400">產品目錄更新中...</div>
               )}
            </div>
            
            <div className="mt-12 text-center md:hidden">
               <button onClick={() => onNavigate('products')} className="px-6 py-3 border border-brand-600 text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors w-full">
                   查看全部產品 View All
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};