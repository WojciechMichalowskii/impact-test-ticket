"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import styles from "./Category.module.scss";
import { displayCategoryName } from "@/utils";
import { Product } from "@/components/ProductItem/types";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const { category } = params;

  useEffect(() => {
    if (category) {
      fetch(
        `https://fakestoreapi.com/products/category/${displayCategoryName(
          category
        )}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [category]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className={styles.categoryPage}>
      <h1>Produkty w kategorii: {category}</h1>
      <p>Łącznie produktów: {products.length}</p>
      <Link href="/">
        <button className={styles.backButton}>Powrót do strony głównej</button>
      </Link>
      <ul className={styles.productList}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </div>
  );
}
