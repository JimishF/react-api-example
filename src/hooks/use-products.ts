import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../actions/fetch-products";
import { Product } from "../types/product";

export const useProducts = (limit = 5) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((products) => setProducts(products ?? []))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredProducts = useMemo<Product[]>(() => {
    if (limit) {
      return products.slice(0, limit);
    }
    return products;
  }, [products, limit]);

  return { isLoading, error, products: filteredProducts };
};
