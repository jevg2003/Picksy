import type { Category } from "./category";
import type { Image } from "./image";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  discount: number;
  characteristics: string | null;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  category: Category;
  images: Image[];
}

export interface ProductResponse {
  content: Product[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
