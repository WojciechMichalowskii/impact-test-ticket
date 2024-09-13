import { useState, useEffect } from "react";
import { Product } from "@/components/ProductItem/types";
import { displayCategoryName } from "@/utils";

const fetchCategoryProducts = async (category: string): Promise<Product[]> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${displayCategoryName(
      category
    )}`
  );

  if (!response.ok) {
    throw new Error("Błąd podczas pobierania produktów.");
  }

  return response.json();
};

export const useCategoryProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      try {
        const data = await fetchCategoryProducts(category);
        setProducts(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, isLoading, error };
};
