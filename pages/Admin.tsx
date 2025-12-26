import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts, saveProduct, deleteProduct } from '../services/productService';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: '',
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    ingredients: '',
    specs: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      refreshProducts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'jimmy' && password === '1234') {
        setIsAuthenticated(true);
        setLoginError('');
    } else {
        setLoginError('帳號或密碼錯誤');
    }
  };

  const refreshProducts = () => {
    setProducts(getProducts());
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreate = () => {
    setCurrentProduct({
      id: Date.now().toString(),
      name: '',
      category: '',
      description: '',
      imageUrl: 'https://picsum.photos/seed/herb_lab/600/600',
      ingredients: '',
      specs: ''
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('確定要刪除此產品嗎？此動作無法復原。')) {
      deleteProduct(id);
      refreshProducts();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveProduct(currentProduct);
    setIsEditing(false);
    refreshProducts();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentProduct(prev => ({ ...prev, [name]: value }));
  };

  // Login Screen
  if (!isAuthenticated) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
              <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
                  <div className="text-center mb-8">
                      <div className="w-12 h-12 bg-brand-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">S</div>
                      <h1 className="text-2xl font-bold text-slate-900">後台管理系統</h1>
                      <p className="text-sm text-slate-500 mt-2">Authorized Personnel Only</p>
                  </div>
                  <form onSubmit={handleLogin} className="space-y-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">帳號 Username</label>
                          <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" 
                            placeholder="輸入帳號"
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">密碼 Password</label>
                          <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" 
                            placeholder="輸入密碼"
                          />
                      </div>
                      {loginError && <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded">{loginError}</p>}
                      <button type="submit" className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors">
                          安全登入
                      </button>
                  </form>
              </div>
          </div>
      );
  }

  // Dashboard
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">產品管理 Product Management</h1>
            <p className="text-sm text-slate-500">Total Products: {products.length}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
             {!isEditing && (
                <button 
                  onClick={handleCreate}
                  className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center shadow-lg shadow-brand-500/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  新增產品 Add Product
                </button>
             )}
             <button 
                onClick={() => setIsAuthenticated(false)}
                className="w-full sm:w-auto bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                登出 Logout
              </button>
          </div>
        </div>

        {isEditing ? (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-slate-200 animate-fade-in">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-800">{currentProduct.id ? '編輯產品 Edit Product' : '新增產品 Create Product'}</h2>
                <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">產品名稱 Product Name</label>
                <input required name="name" value={currentProduct.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="例如：極萃西洋蔘精華飲" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">分類 Category</label>
                <input required name="category" value={currentProduct.category} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="例如：機能飲品" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">圖片連結 Image URL</label>
                <input required name="imageUrl" value={currentProduct.imageUrl} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="https://..." />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">產品描述 Description</label>
                <textarea required name="description" rows={5} value={currentProduct.description} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="請輸入產品詳細介紹（請留意法規，避免誇大療效）。" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">主要成分 Ingredients</label>
                <input required name="ingredients" value={currentProduct.ingredients} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">規格 Specification</label>
                <input required name="specs" value={currentProduct.specs} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="例如：30ml x 12包" />
              </div>

              {/* Benefits field removed as requested */}

              <div className="md:col-span-2 flex justify-end gap-3 mt-6 pt-6 border-t border-slate-100">
                <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2.5 text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 font-medium transition-colors">取消 Cancel</button>
                <button type="submit" className="px-6 py-2.5 text-white bg-brand-600 rounded-lg hover:bg-brand-700 font-bold shadow-md transition-colors">儲存 Save Product</button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-20">圖片</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[200px]">產品名稱 / 規格</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">分類</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider max-w-xs">描述摘要</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[150px]">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {products.map((product) => (
                        <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                            <img className="h-12 w-12 rounded-lg object-cover border border-slate-200" src={product.imageUrl} alt="" />
                            </td>
                            <td className="px-6 py-4">
                            <div className="text-sm font-bold text-slate-900">{product.name}</div>
                            <div className="text-xs text-slate-500 mt-1">{product.specs}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                                {product.category}
                            </span>
                            </td>
                            <td className="px-6 py-4 max-w-xs">
                            <div className="text-sm text-slate-600 truncate" title={product.description}>
                                    {product.description}
                            </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => handleEdit(product)} className="text-brand-600 hover:text-brand-800 bg-brand-50 px-3 py-1 rounded-md mr-2 transition-colors">編輯</button>
                            <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700 bg-red-50 px-3 py-1 rounded-md transition-colors">刪除</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="flex gap-4 mb-3">
                             <img className="h-20 w-20 rounded-lg object-cover border border-slate-200 flex-shrink-0" src={product.imageUrl} alt="" />
                             <div>
                                 <span className="px-2 py-0.5 inline-flex text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100 mb-1">
                                    {product.category}
                                 </span>
                                 <h3 className="text-base font-bold text-slate-900 leading-tight">{product.name}</h3>
                                 <p className="text-xs text-slate-500 mt-1">{product.specs}</p>
                             </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex gap-2 border-t border-slate-100 pt-3">
                             <button onClick={() => handleEdit(product)} className="flex-1 bg-brand-50 text-brand-700 py-2 rounded-lg text-sm font-medium hover:bg-brand-100 transition-colors">
                                 編輯 Edit
                             </button>
                             <button onClick={() => handleDelete(product.id)} className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                                 刪除 Delete
                             </button>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <div className="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white rounded-xl border border-slate-200 mt-4">
                    <svg className="w-12 h-12 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                    <p>目前資料庫中沒有產品</p>
                    <button onClick={handleCreate} className="mt-4 text-brand-600 hover:text-brand-700 font-medium">立即新增第一項產品</button>
                </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};