import Link from "next/link";
import Image from "next/image";
import cartIcon from "@/assets/icons/cart-icon.png";
import { useAppSelector } from "@/store/hooks";
import styles from "./styles.module.scss";

const CartIcon = () => {
  const cartItemsCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Link href="/cart">
      <div className={styles.cartIconContainer}>
        <Image
          src={cartIcon}
          alt="Koszyk"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
        />
        {cartItemsCount > 0 && (
          <span className={styles.cartItemCount}>{cartItemsCount}</span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
