import Product from "./Product";

export default function ProductsList(props) {

  const addToCart = props.addToCart;

  const products = props.products.map(product =>
    <Product
      key={product._id}
      id={product._id}
      name={product.fulhausProductName}
      brandName={product.vendor.name}
      price={product.retailPrice}
      image={product.imageURLs[0]}
      addToCart={addToCart}    
    />);

  return (
    <div>
      {products}
    </div>
  );
};