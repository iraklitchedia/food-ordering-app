import classes from './CartButton.module.css';
import CartIcon from './CartIcon';

const CartButton = () => {
  const itemCount = 0;

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
