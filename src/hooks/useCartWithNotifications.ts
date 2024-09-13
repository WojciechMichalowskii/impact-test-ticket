import { useAppDispatch } from "@/store/hooks";
import { addToCart, removeFromCart, updateQuantity } from "@/store/cartSlice";
import { toast } from "react-toastify";
import { CartItem } from "@/store/cartSlice";

const useCartWithNotifications = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} został dodany do koszyka!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleRemoveFromCart = (id: number, title: string) => {
    dispatch(removeFromCart(id));
    toast.info(`${title} został usunięty z koszyka`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleUpdateQuantity = (
    id: number,
    quantity: number,
    title: string
  ) => {
    dispatch(updateQuantity({ id, quantity }));
    toast.success(`Ilość ${title} została zaktualizowana do ${quantity}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return {
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
  };
};

export default useCartWithNotifications;
