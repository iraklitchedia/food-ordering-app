import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;

  const closeHandler = () => {
    cartContext.hideCart();
  };

  const orderHandler = () => {
    console.log('Ordering...');
  };

  if (!cartContext.isVisible) {
    return;
  }

  const itemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const itemRemoveHandler = (itemId) => {
    cartContext.removeItem(itemId);
  };

  return (
    <Modal onClose={cartContext.hideCart}>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={itemAddHandler.bind(null, item)}
            onRemove={itemRemoveHandler.bind(null, item.id)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartContext.totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeHandler}>
          Close
        </button>
        {cartContext.items.length > 0 && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
