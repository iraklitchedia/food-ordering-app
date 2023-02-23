import classes from './CartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from './../../store/cart-context';
import { useContext } from 'react';

const CartButton = () => {
  const ctx = useContext(CartContext);

  const onClickHandler = () => {
    ctx.showCart();
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{ctx.totalCount}</span>
    </button>
  );
};

export default CartButton;
