import React, { useEffect } from 'react';

// Shared Layout for Legal Documents
const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
                    <p className="text-slate-500 text-sm">最後更新日期：2025年01月01日</p>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Privacy: React.FC = () => {
    return (
        <LegalLayout title="隱私權政策">
            <div className="space-y-8">
                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1. 政策適用範圍</h3>
                    <p>
                        感謝您造訪蔘樂見有限公司（以下簡稱「本公司」或「SYNLAGEN」）官方網站。本隱私權政策適用於您在使用本網站服務時，本公司所收集之個人資料的運用與保護。但不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">2. 資料之收集與運用</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            單純在瀏覽本網站或下載檔案時，本網站不會收集任何有關個人的識別資料。
                        </li>
                        <li>
                            當您使用本網站的「聯絡我們」或「產品諮詢」功能時，我們可能會請您提供姓名、電子郵件、聯絡電話等資訊，以便我們與您聯繫或提供服務。
                        </li>
                        <li>
                            本網站伺服器會自動記錄使用者所閱讀的網頁、使用者的 IP 位址、網域名稱、瀏覽器種類等資料，這些資料僅作為流量分析與網路行為調查，以便於改善本網站的服務品質，並不對個別使用者進行分析。
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">3. Cookie 之使用</h3>
                    <p>
                        為了提供您最佳的服務，本網站可能會在您的電腦中放置並取用我們的 Cookie。若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導致網站某些功能無法正常執行。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">4. 資料之保護</h3>
                    <p>
                        本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料，只由經過授權的人員才能接觸您的個人資料。
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export const Terms: React.FC = () => {
    return (
        <LegalLayout title="使用條款">
            <div className="space-y-8">
                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1. 同意條款</h3>
                    <p>
                        當您使用蔘樂見有限公司（SYNLAGEN）網站時，即表示您已閱讀、瞭解並同意接受本使用條款之所有內容。本公司有權隨時修改或變更本條款內容，建議您隨時注意該等修改或變更。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">2. 智慧財產權聲明</h3>
                    <p>
                        本網站上所有內容，包括但不限於文字、圖片、檔案、資訊、資料、網站架構、網頁設計，均由本公司或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。任何人不得逕自使用、修改、重製、公開播送、改作、散布、發行、公開發表。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">3. 非醫療建議聲明</h3>
                    <p className="bg-slate-100 p-4 border-l-4 border-brand-500 text-slate-800">
                        本網站所提供的產品資訊、健康知識僅供參考，並非醫療建議、診斷或治療。本公司之產品為食品或機能性食品，非藥品，不具備治療或矯正人類疾病之醫療效能。若您有任何醫療狀況或健康疑慮，請務必諮詢專業醫師或醫療人員。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">4. 免責聲明</h3>
                    <p>
                        本公司以目前一般認為合理之方式及技術，維護本網站之正常運作。但對於因不可抗力、電腦病毒、駭客攻擊、系統故障等原因導致服務中斷或資料流失，本公司不負任何賠償責任。
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export const DataProtection: React.FC = () => {
    return (
        <LegalLayout title="個資保護聲明">
            <div className="space-y-8">
                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1. 蒐集之目的</h3>
                    <p>
                        蔘樂見有限公司（下稱本公司）基於「行銷」、「客戶管理與服務」、「網路購物及其他電子商務服務」、「契約、類似契約或其他法律關係事務」等特定目的，蒐集您的個人資料。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">2. 蒐集之個人資料類別</h3>
                    <p>
                        本公司蒐集之個人資料類別可能包括：
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>C001 辨識個人者：如姓名、地址、電話、電子郵件等。</li>
                        <li>C011 個人描述：如性別、出生年月日等。</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">3. 利用期間、地區、對象及方式</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>期間：</strong>自您同意成為本公司會員或開始使用本公司服務之日起，至本公司停止服務或您終止同意之日止。</li>
                        <li><strong>地區：</strong>本公司營運之地區（台灣、新加坡、中國及其他經主管機關核准之國際傳輸地）。</li>
                        <li><strong>對象：</strong>本公司、本公司之分公司、關係企業、業務合作夥伴（如物流商）。</li>
                        <li><strong>方式：</strong>以自動化機器或其他非自動化之利用方式。</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">4. 當事人權利</h3>
                    <p>
                        依據個人資料保護法第三條規定，您就本公司保有之個人資料得行使下列權利：
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>查詢或請求閱覽。</li>
                        <li>請求製給複製本。</li>
                        <li>請求補充或更正。</li>
                        <li>請求停止蒐集、處理或利用。</li>
                        <li>請求刪除。</li>
                    </ul>
                    <p className="mt-4 text-sm text-slate-500">
                        如欲行使上述權利，請透過本網站「聯絡我們」之管道與我們聯繫。
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};