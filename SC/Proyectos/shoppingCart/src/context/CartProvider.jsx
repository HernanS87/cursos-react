import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const shopReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CART] AddP":
        return [...state, action.payload];
      case "[CART] Increase":
        return state.map((p) => {
          if (p.id === action.payload) {
            const cant = p.quantity + 1;
            return { ...p, quantity: cant };
          }
          return p;
        });
      case "[CART] Decrease":
        return state.map((p) => {
          if (p.id === action.payload && p.quantity > 1) {
            const cant = p.quantity - 1;
            return { ...p, quantity: cant };
          }
          return p;
        });
      case "[CART] DeleteP":
        return state.filter((p) => p.id !== action.payload);
      default:
        return state;
    }
  };

  const [shopList, dispatch] = useReducer(shopReducer, initialState);

  const addProduct = (compra) => {
    compra.quantity = 1;
    const action = {
      type: "[CART] AddP",
      payload: compra,
    };
    dispatch(action);
  };
  const increaseQuantity = (id) => {
    const action = {
      type: "[CART] Increase",
      payload: id,
    };
    dispatch(action);
  };
  const decreaseQuantity = (id) => {
    const action = {
      type: "[CART] Decrease",
      payload: id,
    };
    dispatch(action);
  };
  const deleteProduct = (id) => {
    const action = {
      type: "[CART] DeleteP",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        shopList,
        addProduct,
        increaseQuantity,
        decreaseQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
