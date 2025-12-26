import React from 'react';

interface AboutProps {
    onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* Header Section - Updated with Science & Nature image */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920')] bg-cover bg-center opacity-30"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">科學與自然的共生 Vision & Mission</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
               賦能健康，引領未來。SYNLAGEN (蔘樂見) 致力於以生物科技釋放西洋蔘的天然潛能，同時守護我們珍貴的地球資源。
            </p>
         </div>
      </section>

      {/* Story Section - Updated with R&D Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">Our Corporate Identity</div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">深耕亞洲，戰略佈局全球 <br/>Global Strategic Layout</h2>
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                        <p>
                            蔘樂見有限公司 (Shen Le Jian Co., Ltd.)，英文品牌為 <strong>SYNLAGEN</strong>，成立於台灣，以前瞻性的生物科技視野，專注於開發次世代機能性食品。我們的核心專長在於西洋蔘（American Ginseng）與人蔘皂甙（Ginsenosides）的研究與應用。
                        </p>
                        <p>
                            我們深知傳統西洋蔘溫補不燥的特性，並利用現代科學技術提取關鍵的皂甙成分。以台灣為研發總部，我們的業務版圖已成功拓展至新加坡與中國市場，並持續佈局泛亞太地區。
                        </p>
                        <p className="font-semibold text-slate-800">
                            我們的目標明確：成為全球西洋蔘生物科技應用的領導者，提供消費者最便捷的營養補給選擇。
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200" 
                        alt="SYNLAGEN Biotech Research" 
                        className="rounded-2xl shadow-2xl filter brightness-95 object-cover h-[500px] w-full" 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-brand-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">永續承諾 Sustainability</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                      我們深信，人類的健康源於地球的健康。SYNLAGEN 致力於負責任的生產與環境友善的運營模式。
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-3xl mb-4">🌱</div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">植物性力量</h3>
                      <p className="text-slate-600 text-sm">
                          善用植物資源，推廣全素友善 (Vegan-Friendly) 的西洋蔘產品，減少對動物性資源的依賴，降低碳排放。
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-3xl mb-4">♻️</div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">環境友善包裝</h3>
                      <p className="text-slate-600 text-sm">
                          致力於減少一次性塑膠使用，優先選用可回收材質、FSC 認證紙材，並推動輕量化包裝設計，減輕地球負擔。
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-3xl mb-4">🏞️</div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">負責任的源頭管理</h3>
                      <p className="text-slate-600 text-sm">
                           與實行永續農法的西洋蔘契作農場合作，確保土壤的休養生息，維護生物多樣性，讓珍貴的草本資源得以生生不息。
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Core Tech Section */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">核心技術 Core Competence</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">專注於西洋蔘皂甙 (American Ginseng Ginsenosides) 的分子級精煉與應用。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6 text-2xl group-hover:scale-110 transition-transform">⚗️</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">超臨界流體萃取 (SFE)</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        透過合作夥伴的先進低溫萃取技術，屏除傳統高溫熬煮對活性成分的破壞，完整鎖定西洋蔘中的關鍵活性圖譜。
                    </p>
                </div>
                
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 text-2xl group-hover:scale-110 transition-transform">🧬</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">定向酶轉化技術</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        運用專利酶工程技術，將天然存在的巨分子皂甙精準轉化為更易被人體利用的小分子皂甙 (如 Rg3, Rh2, Compound K)。
                    </p>
                </div>

                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 text-2xl group-hover:scale-110 transition-transform">🛡️</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">溫和滋補配方</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        西洋蔘性涼補氣，有別於傳統人蔘的燥熱。我們的配方特別適合亞熱帶地區體質以及現代高壓生活族群，提供溫和不負擔的健康維持方案。
                    </p>
                </div>
            </div>
         </div>
      </section>

       <section className="py-20 bg-slate-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">共創健康未來 Join Our Journey</h2>
                <p className="text-slate-400 mb-8 text-lg">探索我們以西洋蔘為核心的機能食品，體驗科學與自然的完美平衡。</p>
                <div className="flex justify-center gap-4">
                     <button onClick={() => onNavigate('products')} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-brand-900/50">
                        產品系列 Products
                     </button>
                     <button onClick={() => onNavigate('contact')} className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                        聯絡我們 Contact
                     </button>
                </div>
            </div>
       </section>
    </div>
  );
};