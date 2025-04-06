import { queryApi } from "@/services/api/index";
import type { Category } from "@/types/api/category";

export const getCategories = async (): Promise<Category[]> => {
  const url = "/categories";

  const data: Category[] = await queryApi(url, { method: "GET" });

  return data;
};
