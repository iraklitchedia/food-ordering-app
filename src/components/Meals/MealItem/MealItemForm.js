import Input from './../../UI/Input';
import classes from './MealItemForm.module.css';
import { useContext, useRef } from 'react';
import CartContext from './../../../store/cart-context';

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const amountInputRef = useRef(null);

  const addClickHandler = (event) => {
    event.preventDefault();

    cartContext.addItem({
      ...props.data,
      amount: Number(amountInputRef.current.value),
    });
  };

  return (
    <form className={classes.form} onSubmit={addClickHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
