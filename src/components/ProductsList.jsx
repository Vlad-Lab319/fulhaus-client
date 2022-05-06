import Product from "./Product";

export default function ProductsList(props) {

  const products = props.productsF.map(product =>
    <Product
      key={product._id}
      name={product.fulhausProductName}
      brandName={product.vendor.name}
      price={product.retailPrice}
      image={product.imageURLs[0]}
    />);

  return (
    <div>
      {products}
    </div>
  );
};