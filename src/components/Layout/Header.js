import classes from './Header.module.css';
import MealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div>ReactMeals</div>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt='Meals' />
      </div>
    </>
  );
};

export default Header;
