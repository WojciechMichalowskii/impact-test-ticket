import { Middleware, isAnyOf } from "@reduxjs/toolkit";
import {
  CartItem,
  addToCart,
  removeFromCart,
  updateQuantity,
} from "./cartSlice";
import { toast } from "react-toastify";

export const notificationMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    if (isAnyOf(addToCart, removeFromCart, updateQuantity)(action)) {
      switch (action.type) {
        case addToCart.type: {
          const item: CartItem = action.payload;
          toast.success(`${item.title} został dodany do koszyka!`, {
            position: "top-right",
            autoClose: 3000,
          });
          break;
        }

        case removeFromCart.type: {
          const state = storeAPI.getState().cart;
          const removedItem = state.items.find(
            (item: CartItem) => item.id === action.payload
          );
          if (removedItem) {
            toast.info(`${removedItem.title} został usunięty z koszyka`, {
              position: "top-right",
              autoClose: 3000,
            });
          }
          break;
        }

        case updateQuantity.type: {
          const { id, quantity } = action.payload;
          const state = storeAPI.getState().cart;
          const updatedItem = state.items.find(
            (item: CartItem) => item.id === id
          );
          if (updatedItem) {
            toast.success(
              `Ilość ${updatedItem.title} została zaktualizowana do ${quantity}`,
              {
                position: "top-right",
                autoClose: 3000,
              }
            );
          }
          break;
        }

        default:
          break;
      }
    }

    return next(action);
  };
