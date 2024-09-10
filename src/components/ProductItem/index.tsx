import { Product } from "./types";
import styles from "./styles.module.scss";

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  return (
    <li className={styles.productItem}>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <div className={styles.productDetails}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <p className={styles.productPrice}>Cena: {product.price} zł</p>
          <button
            className={styles.addToCartButton}
            onClick={() => onAddToCart(product)}
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
