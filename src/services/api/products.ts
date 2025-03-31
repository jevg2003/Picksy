import { API_BASE_URL } from "./index";
import type { ProductResponse } from "@/types/api/product";

export const getProducts = async (): Promise<ProductResponse> => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`${response.status} Error al obtener productos: ${response.statusText}`);
  }

  const data: ProductResponse = await response.json();
  return data;
};
