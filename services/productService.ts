import { Product } from '../types';

const STORAGE_KEY = 'slj_biotech_products_v1.4';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'br-eve',
    name: '西洋蔘精華 潤。氣 BR.EVE',
    category: '專業調理',
    description: '專為現代人設計的「隨身元氣包」。嚴選北美威斯康辛州頂級西洋蔘，採用獨家專利萃取技術，完整保留珍貴的人蔘皂甙(Ginsenosides)精華。配合療肺草與百合等草本複方，養生潤氣，性質溫和不燥熱。小巧隨身包設計，讓您隨時隨地輕鬆補給，維持最佳狀態。',
    imageUrl: 'https://www.dropbox.com/scl/fi/20rsh06fioacn4mycvn5g/.png?rlkey=vvlf54es89lvsdw3tazthhpiy&st=s32m3tvy&raw=1', 
    ingredients: '西洋蔘、療肺草萃取物、甘草粉、麥門冬萃取物、百合萃取物、羅漢果醣苷萃取物、薄荷涼味劑、微結晶狀α-纖維素',
    specs: '2公克/包，12包/盒'
  },
  {
    id: '2',
    slug: 'gummy',
    name: '西洋蔘草本潤喉軟糖',
    category: '日常保健',
    description: '將西洋蔘精華包覆於軟喉糖中，口感佳且風味足。方便隨身攜帶，隨時隨地補充元氣。',
    imageUrl: 'https://www.dropbox.com/scl/fi/ynxjm787x50wvcxal4z5v/.png?rlkey=7y3mjbj9diq5asab2oocbyl66&st=mc77ng86&dl=1',
    ingredients: '砂糖、麥芽糖、椰子油、西洋蔘、明膠、植物萃取物(枇杷葉、桔梗、茯苓、陳皮、蓮子、羅漢果、生薑)、蜂蜜、香料、焦糖色素、薄荷腦、棕櫚蠟(食品製造用劑)。',
    specs: '30公克/包'
  },
  {
    id: '3',
    slug: 'tea-bag',
    name: '西洋蔘紅棗枸杞茶包',
    category: '日常保健',
    description: '嚴選北美威斯康辛州頂級西洋蔘，搭配紅棗與枸杞，全方位提供調節生理機能。適合需要長期調理與滋補強身之族群。',
    imageUrl: 'https://www.dropbox.com/scl/fi/5meatdyzrzrmxwnet0n8b/_.png?rlkey=m60qj35s4jiwc9683nkannxlo&st=b6lkdth9&dl=1',
    ingredients: '西洋蔘粉、紅棗、枸杞',
    specs: '12包 / 盒'
  }
];

export const getProducts = (): Product[] => {
  if (typeof window === 'undefined') return INITIAL_PRODUCTS;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('slj_biotech_products')) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  return JSON.parse(stored);
};

export const saveProduct = (product: Product) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === product.id);
  if (index >= 0) {
    products[index] = product;
  } else {
    products.push(product);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const deleteProduct = (id: string) => {
  const products = getProducts().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};