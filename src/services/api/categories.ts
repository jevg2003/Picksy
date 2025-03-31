import { API_BASE_URL } from "./index";
import type { Category } from "@/types/api/category";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Error al obtener categorías: ${response.statusText}`);
  }

  const data: Category[] = await response.json();
  return data;
};