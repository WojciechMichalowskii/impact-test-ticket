import styles from "./styles.module.scss";
import { CartItemType } from "./types";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onQuantityChange }: CartItemProps) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    if (quantity > 0) {
      onQuantityChange(item.id, quantity);
    }
  };

  return (
    <li className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <h2>{item.title}</h2>
        <h6>Cena: {item.price} zł</h6>
      </div>
      <div className={styles.cartItemActions}>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <button onClick={() => onRemove(item.id)}>Usuń</button>
      </div>
    </li>
  );
};

export default CartItem;
