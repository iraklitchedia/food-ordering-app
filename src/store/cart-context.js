import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  isVisible: false,
  showCart: () => {},
  hideCart: () => {},
});

export default CartContext;
