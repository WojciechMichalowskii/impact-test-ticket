"use client";

import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import ProductItem from "@/components/ProductItem";
import SkeletonLoader from "@/components/CategorySkeletonLoader";
import { Product } from "@/components/ProductItem/types";
import styles from "./styles.module.scss";
import { useCategoryProducts } from "@/hooks/useCategoryProducts";

interface ClientSideCategoryProps {
  category: string;
}

const ClientSideCategory = ({ category }: ClientSideCategoryProps) => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useCategoryProducts(category);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (error) return <p>Wystąpił błąd: {error.message}</p>;

  return (
    <div className={styles.clientSideCategory}>
      <p>Łącznie produktów: {products?.length || 0}</p>
      <ul className={styles.productList}>
        {isLoading ? (
          <SkeletonLoader count={6} />
        ) : (
          products?.map((product: Product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ClientSideCategory;
