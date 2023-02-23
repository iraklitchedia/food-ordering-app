import { useReducer, useState } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const oldItem = state.items.find((el) => el.id === action.newItem.id);
    if (oldItem) {
      oldItem.amount += action.newItem.amount;
    }

    let items = state.items;
    if (!oldItem) {
      items = [...state.items, action.newItem];
    }

    return {
      items,
      totalPrice:
        state.totalPrice + action.newItem.amount * action.newItem.price,
      totalCount: state.totalCount + action.newItem.amount,
    };
  }

  if (action.type === 'REMOVE') {
    const oldItem = state.items.find((el) => el.id === action.itemId);
    oldItem.amount--;

    let items = state.items;
    if (oldItem.amount === 0) {
      items = state.items.filter((el) => el.id !== action.itemId);
    }
    return {
      items,
      totalPrice: state.totalPrice - oldItem.price,
      totalCount: state.totalCount - 1,
    };
  }
};

const CartContextProvider = (props) => {
  const [state, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
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
    totalPrice: state.totalPrice,
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
