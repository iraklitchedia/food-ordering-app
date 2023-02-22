import React, { useState } from 'react';

const CartContext = React.createContext({
  isVisible: false,
  showCart: () => {
    console.log('test');
  },
  hideCart: () => {},
});

export const CartContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const showCart = () => {
    setIsVisible(true);
  };

  const hideCart = () => {
    setIsVisible(false);
  };

  return (
    <CartContext.Provider value={{ isVisible, showCart, hideCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
