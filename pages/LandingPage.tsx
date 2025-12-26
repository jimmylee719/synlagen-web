import React, { useEffect } from 'react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('已複製分享連結！');
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-brand-100">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000" 
            alt="Deep Forest" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/50 text-brand-300 text-sm font-bold mb-8 backdrop-blur-sm tracking-[0.2em] uppercase">
            SYNLAGEN Innovation
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
            潤。氣 <span className="text-brand-400">BR.EVE</span>
            <span className="block text-2xl md:text-3xl font-light text-slate-300 mt-4 tracking-widest">每一口，都是森林般的深呼吸</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            針對現代環境挑戰而生。結合北美西洋蔘精華與草本潤補配方，由內而外為您打造純淨防護網。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full transition-all shadow-xl shadow-brand-900/40">
              立即體驗健康潤氣
            </button>
            <button onClick={copyUrl} className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-full transition-all">
              分享產品資訊
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* 2. Problem Section - Environmental Change */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1545153996-80006733ec18?q=80&w=1200" 
                alt="City Smog" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                您是否正與環境 <br/><span className="text-red-600">「乾、悶、澀」</span> 奮戰？
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>我們生活在一個前所未有的挑戰時代：</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    PM 2.5 與都市空氣汙染的無聲侵襲
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    長期在空調辦公室導致的極度乾燥
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    換季時節的生理機能調節壓力
                  </li>
                </ul>
                <p className="pt-4 font-semibold text-slate-800">
                  不僅是外在的防護，您更需要從內而外的深層滋補。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution - Three Pillars */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">潤。氣 BR.EVE 複方科學</h2>
            <p className="text-slate-500">針對現代人開發的草本防護鐵三角</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                蔘
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-700">西洋蔘精華</h3>
              <p className="text-slate-600 leading-relaxed">
                嚴選威斯康辛高品質西洋蔘。性溫不燥，富含稀有皂甙。調節生理機能，為您補足內在元氣基底。
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                草
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">療肺草萃取</h3>
              <p className="text-slate-600 leading-relaxed">
                歐洲古老智慧結晶。幫助潤澤舒爽，在多變的環境條件下，協助維持順暢的呼吸品質與清新感。
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm">
                合
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-700">百合與麥門冬</h3>
              <p className="text-slate-600 leading-relaxed">
                經典東方草本。養生潤氣，解決環境引起的乾燥與不適，讓滋補不僅是點狀補給，而是全面的屏障。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Science Section */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">分子級的精準營養</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
            <div className="space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="font-bold text-xl mb-2 text-brand-400">專利定向酶轉化技術</h4>
                <p className="text-slate-400 text-sm">
                  SYNLAGEN 透過專利製程，將西洋蔘中巨大的皂甙分子，精煉為人體極易吸收的小分子皂甙，確保每一滴精華都能發揮最大價值。
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="font-bold text-xl mb-2 text-brand-400">無重金屬與農藥殘留</h4>
                <p className="text-slate-400 text-sm">
                  從源頭把關，通過國際第三方認證，讓您在追求健康的同時，不需擔心額外的負擔。
                </p>
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-gradient-to-br from-brand-500/20 to-transparent rounded-full border border-white/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-brand-400 mb-2">99%</div>
                    <div className="text-sm tracking-widest uppercase opacity-60 font-light">高純度精鍊</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lifestyle Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">隨時隨地，守護每一秒</h2>
              <p className="text-slate-500 mt-4">專為快節奏現代生活設計的隨身包裝</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" className="rounded-2xl h-64 w-full object-cover" alt="Office Life" />
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600" className="rounded-2xl h-64 w-full object-cover mt-8" alt="Active Life" />
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600" className="rounded-2xl h-64 w-full object-cover" alt="Travel" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600" className="rounded-2xl h-64 w-full object-cover mt-8" alt="Yoga" />
           </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200 md:hidden flex gap-4">
        <button onClick={() => onNavigate('contact')} className="flex-1 bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg">
          立即諮詢
        </button>
        <button onClick={() => onNavigate('products')} className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold shadow-lg">
          產品清單
        </button>
      </div>

      {/* Desktop Footer CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
         <h2 className="text-3xl font-bold mb-8">開啟您的潤氣之旅</h2>
         <div className="flex justify-center gap-6">
            <button onClick={() => onNavigate('contact')} className="px-12 py-4 bg-brand-600 text-white font-bold rounded-lg shadow-xl shadow-brand-500/20 hover:scale-105 transition-transform">
               聯繫業務經理諮詢
            </button>
            <button onClick={() => onNavigate('home')} className="px-12 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50">
               返回官網首頁
            </button>
         </div>
         <p className="mt-12 text-xs text-slate-400">* 本產品為食品，非藥品，不具醫療效能。個人體質不同，建議飲用前諮詢專業人員。</p>
      </section>
    </div>
  );
};