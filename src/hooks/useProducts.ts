import { useEffect, useState } from "react";
import { getProducts } from "@/services/api/products";

interface Product {
  id: number;
  name: string;
  price: number;
  images: Array<{ isCover: boolean; link: string }>;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({ size: 100 });
        setProducts(response.content);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
