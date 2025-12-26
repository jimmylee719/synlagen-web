import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="bg-slate-900 p-10 text-white flex flex-col justify-between md:w-1/2">
            <div>
              <h2 className="text-3xl font-bold mb-6">聯絡我們 Contact Us</h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                若您有西洋蔘與人蔘皂甙相關產品經銷、OEM/ODM 代工合作需求，歡迎透過以下方式與我們聯繫。
              </p>
              
              <div className="space-y-6">
                {/* Manager Info */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Business Manager</p>
                    <p className="text-lg font-semibold mt-1">Jimmy Lee</p>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                     <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email Inquiry</p>
                    <a href="mailto:jimmylee0719@gmail.com" className="text-base text-white hover:text-brand-400 transition-colors mt-1 block">
                        jimmylee0719@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address Info */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Office Address</p>
                    <p className="text-base text-white mt-1 leading-relaxed">
                      桃園市中壢區復興路27號6樓
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 my-4"></div>

                {/* Authorized Distributor Info (Plain Text) */}
                <div className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                   <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                   </div>
                   <div className="ml-4">
                     <p className="text-xs font-medium text-brand-400 uppercase tracking-wider">產品購買經銷商 Authorized Distributor</p>
                     <p className="text-base font-bold text-white mt-1">覓帆企業有限公司</p>
                     <p className="text-slate-300 text-sm mt-1">0958-266-804</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-500">SYNLAGEN Head Office, Taiwan</p>
            </div>
          </div>

          {/* Line QR Code Section */}
          <div className="p-10 bg-white md:w-1/2 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">加入官方 LINE 好友</h3>
            <p className="text-sm text-slate-500 mb-8">即時獲取 SYNLAGEN 產品資訊與專人服務</p>
            
            <div className="w-48 h-48 bg-slate-100 rounded-xl mb-8 flex items-center justify-center border-2 border-slate-200 p-2">
                {/* QR Code generated from the link provided */}
                <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lin.ee/TPREf75" 
                    alt="LINE QR Code" 
                    className="w-full h-full object-contain"
                />
            </div>
            
            <button 
                className="w-full max-w-xs py-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-lg transition-colors shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                onClick={() => window.open('https://lin.ee/TPREf75', '_blank')}
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 5.56 2 9.95c0 2.47 1.41 4.67 3.65 6.13-.15.54-.53 1.95-.6 2.25-.06.28.11.45.31.25.17-.18 2.37-2.11 3.23-2.85.45.09.92.14 1.41.14 5.52 0 10-3.56 10-7.95S17.52 2 12 2zm.76 10.3h-4.6c-.28 0-.5-.22-.5-.5v-4.6c0-.28.22-.5.5-.5h4.6c.28 0 .5.22.5.5v4.6c0 .28-.22.5-.5.5zm-1.63-1.5h-1.34v-2.6h1.34v2.6zm2.63 0h-1.34v-2.6h1.34v2.6z"/>
                    <path d="M12 0C5.373 0 0 4.973 0 11.107c0 3.328 1.577 6.32 4.148 8.356-.169.605-.595 2.185-.681 2.518-.063.313.123.504.346.28.192-.196 2.656-2.365 3.615-3.193.504.101 1.031.157 1.572.157 6.627 0 12-4.973 12-11.107S16.627 0 12 0z" fillRule="evenodd" fillOpacity="0"/>
                </svg>
                點擊加入好友 (Add Friend)
            </button>
            <p className="text-xs text-slate-400 mt-4">掃描行動條碼或點擊按鈕即可加入</p>
          </div>
        </div>
      </div>
    </div>
  );
};