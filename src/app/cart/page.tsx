"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import CartItem from "@/components/CartItem";
import styles from "./Cart.module.scss";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <h1>Koszyk</h1>
      {cartItems.length === 0 ? (
        <p>Twój koszyk jest pusty</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </ul>
      )}
      <h2 className={styles.totalPrice}>Łączna cena: {totalPrice} zł</h2>
    </div>
  );
}
