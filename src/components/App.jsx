import './App.css';
import useApplicationData from '../hooks/useApplicationData';
import ProductsList from './ProductsList';

function App() {

  // Dummy data
  // const products = [
  //   {fulhausProductName: "Product 1"},
  //   {fulhausProductName: "Product 2"},
  // ]
  
  // Fetched data
  const productsFetched = useApplicationData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React starts from here
        </p>
        <section>
          <ProductsList
            // products={products}
            productsF={productsFetched.products}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
