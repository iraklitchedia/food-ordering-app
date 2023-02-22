import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];

  const closeHandler = () => {
    cartContext.hideCart();
  };

  const orderHandler = () => {
    console.log('Ordering...');
  };

  if (!cartContext.isVisible) {
    return;
  }

  return (
    <Modal onClose={cartContext.hideCart}>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>23.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeHandler}>
          Close
        </button>
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
