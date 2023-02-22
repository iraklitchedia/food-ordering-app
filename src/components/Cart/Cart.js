import classes from './Cart.module.css';
import Modal from './../UI/Modal';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>23.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
