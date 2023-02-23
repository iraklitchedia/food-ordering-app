import classes from './CartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from './../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const CartButton = () => {
  const [btnClasses, setBtnClasses] = useState(`${classes.button}`);
  const ctx = useContext(CartContext);

  const onClickHandler = () => {
    ctx.showCart();
  };

  useEffect(() => {
    if (ctx.totalCount === 0) {
      return;
    }

    setBtnClasses(`${classes.button} ${classes.bump}`);

    const timer = setTimeout(() => {
      setBtnClasses(`${classes.button}`);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.totalCount]);

  return (
    <button className={btnClasses} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{ctx.totalCount}</span>
    </button>
  );
};

export default CartButton;
