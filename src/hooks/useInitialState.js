import { useState } from "react";

const initialState = {
  cart: [],
  cartOpen: false,
  productState: false,
  productInfo: {
    images: null,
    price: null,
    title: null,
    description: null,
  },
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const handleMyOrder = () => {
    setState({
      ...state,
      cartOpen: !state.cartOpen,
    });
  };

  const handleMyProductInfo = (product) => {
    setState({
      ...state,
      productState: !state.productState,
      productInfo: product,
    });
  };
  const updateMyProductInfo = (product) => {
    setState({
      ...state,
      productInfo: product,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    handleMyOrder,
    handleMyProductInfo,
    updateMyProductInfo,
  };
};

export default useInitialState;
