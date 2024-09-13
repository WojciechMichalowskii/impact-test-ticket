import SideCart from "@/components/SideCart";
import styles from "./Cart.module.scss";

export default function CartPage() {
  return (
    <div className={styles.cartPage}>
      <h1>Koszyk</h1>
      <SideCart />
    </div>
  );
}
