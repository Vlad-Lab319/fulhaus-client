// import './App.css';
import useApplicationData from '../hooks/useApplicationData';
import ProductsList from './ProductsList';
import Navbar from './Navbar';

function App() {

  // Dummy data
  // const products = [
  //   {fulhausProductName: "Product 1"},
  //   {fulhausProductName: "Product 2"},
  // ]

  // App data
  const {
    products, 
    cart, 
    addToCart,
    removeFromCart
  } = useApplicationData();

  return (
    <div className="App">
      <Navbar 
      cart={cart}
      removeFromCart={removeFromCart}
      />

      <div className="main-page">
        <img
          className="main-img"
          src="https://cdn.sanity.io/images/swpm962j/production/6e6ad658018ae5d35751820b11f09159709f7211-2656x1228.jpg" alt="Nuevo-heroImage"
        />
      </div>

      <section>
        <ProductsList
          products={products}
          addToCart={addToCart}
        />
      </section>

    </div>
  );
}

export default App;
