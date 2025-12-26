export interface Product {
  id: string;
  slug?: string; // 用於一頁式網址，例如 'br-eve'
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  ingredients: string;
  specs: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
}