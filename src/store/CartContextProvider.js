import { useReducer, useState } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const items = [...state.items, action.newItem];
    return {
      items,
      totalAmount:
        state.totalAmount + action.newItem.amount * action.newItem.price,
      totalCount: state.totalCount + 1,
    };
  }

  if (action.type === 'REMOVE') {
    const items = state.items.filter((el) => el.id === action.itemId);
    return {
      items,
      totalAmount:
        state.totalAmount - action.newItem.amount * action.newItem.price,
      totalCount: state.totalCount - 1,
    };
  }
};

const CartContextProvider = (props) => {
  const [state, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const showCart = () => {
    setIsVisible(true);
  };

  const hideCart = () => {
    setIsVisible(false);
  };

  const addItem = (item) => {
    dispatchCartAction({ type: 'ADD', newItem: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: 'REMOVE', itemId: id });
  };

  const cartContext = {
    isVisible,
    showCart,
    hideCart,
    items: state.items,
    totalAmount: state.totalAmount,
    totalCount: state.totalCount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
