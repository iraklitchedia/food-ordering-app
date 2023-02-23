import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <Cart />
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
