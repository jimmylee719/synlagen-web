import React from 'react';

interface ServicesProps {
    onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[75vh] w-full overflow-hidden flex items-center justify-center text-center py-24">
                <div className="absolute inset-0 bg-slate-900">
                    <img 
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920" 
                        alt="R&D Lab Background" 
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 z-10 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/50 text-white text-sm font-semibold mb-6 backdrop-blur-sm tracking-wide">
                        西洋蔘與人蔘皂甙專家 Ginsenoside Expert
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        專業代工服務 <span className="block text-brand-400 mt-2 text-3xl md:text-5xl">OEM / ODM Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        您的品牌，我們的科學。SYNLAGEN 專注於西洋蔘皂甙應用，整合全球供應鏈，提供符合國際標準的一站式機能食品解決方案。
                    </p>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-500/30 mb-8"
                    >
                        立即諮詢 Start Your Project
                    </button>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">為什麼選擇 SYNLAGEN？ Why Choose Us</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            我們擁有強大的西洋蔘供應鏈管理能力與皂甙科研背景，協助您打造具有市場競爭力的明星產品。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mx-auto mb-6">🌱</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">頂級西洋蔘原材</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                源頭直控北美威斯康辛州（Wisconsin）高品質西洋蔘，無專利限制，但確保原料純正、無重金屬殘留，奠定產品優良基礎。
                            </p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mx-auto mb-6">🔬</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">專利萃取技術合作</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                與擁有專利技術的生技實驗室緊密合作，運用定向酶轉化技術，精準提取高活性人蔘皂甙 (Rg3, Rh2, CK)，大幅提升產品價值。
                            </p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mx-auto mb-6">🤝</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">嚴選製造夥伴</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                我們選擇具備 ISO 22000、HACCP 認證的國際級代工夥伴進行合作生產，靈活運用產能，確保品質與效率。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Steps */}
            <section className="py-20 bg-slate-900 text-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">一站式服務流程 Service Workflow</h2>
                        <p className="text-slate-400">從概念到貨架，我們與您並肩同行。</p>
                    </div>
                    
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                            {[
                                { step: '01', title: '需求諮詢', desc: 'Consultation' },
                                { step: '02', title: '配方研發', desc: 'R&D' },
                                { step: '03', title: '打樣確認', desc: 'Sampling' },
                                { step: '04', title: '委託製造', desc: 'Production' },
                                { step: '05', title: '品質檢驗', desc: 'QA / QC' },
                                { step: '06', title: '包裝出貨', desc: 'Logistics' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-600 border-4 border-slate-900 flex items-center justify-center font-bold text-sm mb-4 relative">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                    <p className="text-xs text-slate-500 uppercase">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
            </section>

            {/* Capabilities / Dosage Forms - Updated with Science and Health Breathing Images */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">多元劑型開發 Manufacturing Capabilities</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                我們專精於將西洋蔘與人蔘皂甙，轉化為消費者喜愛的劑型。透過特殊的包埋與調味技術，讓機能食品不僅營養滋補，更要美味好入口。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-brand-500 mr-3 text-xl">✓</span>
                                    <div>
                                        <strong className="text-slate-900 block text-lg">高濃縮皂甙飲 (Ginsenoside Drinks)</strong>
                                        <span className="text-slate-500 text-sm">液態分子小，好吸收。適合西洋蔘飲、複方機能飲。</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-500 mr-3 text-xl">✓</span>
                                    <div>
                                        <strong className="text-slate-900 block text-lg">西洋蔘機能凍 (Ginseng Jellies)</strong>
                                        <span className="text-slate-500 text-sm">口感佳、攜帶方便，年輕族群首選，可掩蓋人蔘苦味。</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-500 mr-3 text-xl">✓</span>
                                    <div>
                                        <strong className="text-slate-900 block text-lg">膠囊與錠劑 (Capsules & Tablets)</strong>
                                        <span className="text-slate-500 text-sm">傳統經典劑型，皂甙劑量精準，適合高濃度萃取物。</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-500 mr-3 text-xl">✓</span>
                                    <div>
                                        <strong className="text-slate-900 block text-lg">即溶蔘粉包 (Ginseng Powder)</strong>
                                        <span className="text-slate-500 text-sm">穩定性高，全株西洋蔘磨粉或萃取粉末，沖泡直接食用皆可。</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <img 
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800" 
                                className="rounded-2xl shadow-lg w-full h-64 object-cover" 
                                alt="Biotech Lab R&D" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800" 
                                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" 
                                alt="Healthy Person Breathing in Nature" 
                            />
                        </div>
                     </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-brand-50 py-16 border-t border-brand-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">準備好打造下一個西洋蔘明星產品了嗎？</h2>
                    <p className="text-slate-600 mb-8">立即聯繫 SYNLAGEN 業務團隊，獲取免費的產品開發諮詢與報價。</p>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                    >
                        聯絡業務團隊 Contact Sales
                    </button>
                </div>
            </section>
        </div>
    );
};