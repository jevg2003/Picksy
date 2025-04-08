import type { ProductResponse } from "@/types/api/product";
import { queryApi } from ".";

export type QueryParams = {
  page?: number;
  size?: number;
  order?: "asc" | "desc";
  sort?: "name" | "price" | "stock";
  minPrice?: number;
  maxPrice?: number;
  search?: string;
};

export const getProducts = async (queryParams?: QueryParams): Promise<ProductResponse> => {
  const queryString = new URLSearchParams(queryParams as Record<string, string>).toString();
  const url = `/products${queryString ? `?${queryString}` : ""}`;

  const data: ProductResponse = await queryApi(url, { method: "GET" });

  return data;
};

export const getProductById = async (id: string): Promise<ProductResponse> => {
  const url = `/products/${id}`;

  const data: ProductResponse = await queryApi(url, { method: "GET" });

  return data;
};

export const createProduct = async (data: FormData): Promise<ProductResponse> => {
  const url = `/products`;

  const response = await queryApi(url, {
    method: "POST",
    body: data,
  });

  return response;
};

export const updateProduct = async (id: string, data: FormData): Promise<ProductResponse> => {
  const url = `/products/${id}`;

  const response = await queryApi(url, {
    method: "PUT",
    body: data,
  });

  return response;
};

export const deleteProduct = async (id: string): Promise<ProductResponse> => {
  const url = `/products/${id}`;

  const response = await queryApi(url, {
    method: "DELETE",
  });

  return response;
};
