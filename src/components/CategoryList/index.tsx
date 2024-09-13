"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { useCategories } from "@/hooks/useFetchCategories";

const CategoryList = () => {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <p>Ładowanie kategorii...</p>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div>
      <h2>Kategorie</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
