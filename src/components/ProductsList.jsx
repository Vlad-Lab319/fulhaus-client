// import './Products.scss';
import Product from "./Product";

export default function ProductsList(props) {

  const addToCart = props.addToCart;

  const products = props.products.map(product =>
    <Product
      key={product._id}
      id={product._id}
      // name={product.name} // proxy server data
      name={product.fulhausProductName}
      brandName={product.vendor.name}
      price={product.retailPrice}
      // image={product.image} // proxy server data
      image={product.imageURLs[0]} // fulhaus data
      addToCart={addToCart}    
    />);

  return (
    <div className="wrapper">
      {products}
    </div>
  );
};