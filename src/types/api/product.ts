import type { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  stock: number;
  isBlock: boolean;
  category: Category;
}

export interface ProductResponse {
  content: Product[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
