import Input from './../../UI/Input';
import classes from './MealItemForm.module.css';
import { useContext, useRef, useState } from 'react';
import CartContext from './../../../store/cart-context';

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const cartContext = useContext(CartContext);
  const amountInputRef = useRef(null);

  const addClickHandler = (event) => {
    event.preventDefault();
    const amount = Number(amountInputRef.current.value);
    if (
      amountInputRef.current.value.trim().length === 0 ||
      amount < 1 ||
      amount > 5
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

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
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
