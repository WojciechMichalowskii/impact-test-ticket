import { useState, useEffect } from "react";

async function fetchCategories(): Promise<string[]> {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) {
    throw new Error("Błąd podczas pobierania kategorii.");
  }
  return response.json();
}

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error: any) {
        setError("Wystąpił błąd podczas ładowania kategorii.");
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, isLoading, error };
}
