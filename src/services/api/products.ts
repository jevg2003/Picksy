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
